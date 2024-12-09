import React, { useState, useCallback } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Snackbar, Alert } from "@mui/material";
import Cropper from "react-easy-crop";
import Compressor from "compressorjs";  // کتابخانه برای فشرده‌سازی تصویر

const ImageCropDialog = ({ open, onClose, imageSrc, onCropComplete }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedArea, setCroppedArea] = useState(null);
    const [compressedImage, setCompressedImage] = useState(null); // ذخیره تصویر فشرده‌شده
    const [openSnackbar, setOpenSnackbar] = useState(false); // وضعیت نمایش Snackbar
    const [snackbarMessage, setSnackbarMessage] = useState(''); // پیام نمایش داده شده در Snackbar

    const handleCropComplete = useCallback((_, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
    }, []);

    // فشرده‌سازی تصویر قبل از کراپ
    const compressImage = (imageFile) => {
        return new Promise((resolve, reject) => {
            new Compressor(imageFile, {
                quality: 0.8,  // تنظیم کیفیت (بین 0 تا 1)
                maxWidth: 1920,  // حداکثر عرض تصویر
                maxHeight: 1920, // حداکثر ارتفاع تصویر
                success(result) {
                    // اگر فشرده‌سازی موفقیت‌آمیز بود، تصویر فشرده‌شده را به تابع resolve ارسال می‌کنیم
                    resolve(result);
                },
                error(err) {
                    reject(err);
                }
            });
        });
    };

    // تبدیل تصویر به PNG و برگرداندن فایل کراپ‌شده
    const getCroppedImg = (imageSrc, croppedAreaPixels) => {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.src = imageSrc;
            image.crossOrigin = "anonymous";  // برای بارگذاری تصاویر از منابع خارجی

            image.onload = () => {
                // بررسی ابعاد تصویر
                if (image.width < 100 || image.height < 100) {
                    reject(new Error("Image is too small for cropping"));
                    return;
                }

                // ساخت canvas برای کراپ کردن تصویر
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");

                canvas.width = croppedAreaPixels.width;
                canvas.height = croppedAreaPixels.height;

                // کراپ کردن تصویر با ابعاد مشخص‌شده
                ctx.drawImage(
                    image,
                    croppedAreaPixels.x,
                    croppedAreaPixels.y,
                    croppedAreaPixels.width,
                    croppedAreaPixels.height,
                    0,
                    0,
                    croppedAreaPixels.width,
                    croppedAreaPixels.height
                );

                // تبدیل تصویر کراپ‌شده به PNG
                canvas.toBlob(
                    (blob) => {
                        if (blob) {
                            // تبدیل Blob به فایل و تغییر نام به "avatar.png"
                            const file = new File([blob], "avatar.png", { type: "image/png" });
                            resolve(file); // ارسال فایل کراپ‌شده
                        } else {
                            reject(new Error("Failed to create a blob from the canvas"));
                        }
                    },
                    "image/png",  // تبدیل به فرمت PNG
                    1              // کیفیت تصویر
                );
            };

            image.onerror = () => {
                reject(new Error("Failed to load the image."));
            };
        });
    };

    const handleSave = async () => {
        if (croppedArea && imageSrc) {
            try {
                // فشرده‌سازی تصویر ابتدا انجام می‌شود
                const imageFile = await compressImage(imageSrc);
                const compressedImageUrl = URL.createObjectURL(imageFile);

                // اکنون کراپ کردن انجام می‌شود
                const croppedFile = await getCroppedImg(compressedImageUrl, croppedArea);
                onCropComplete(croppedFile); // ارسال فایل کراپ‌شده به کامپوننت والد
            } catch (e) {
                console.error("Error processing the image: ", e);
                setSnackbarMessage("There was an error processing the image. Please try again.");
                setOpenSnackbar(true); // باز کردن Snackbar
            }
        }
        onClose();  // بستن دیالوگ
    };

    // بسته شدن Snackbar
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <>
            <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
                <DialogTitle>Crop Picture</DialogTitle>
                <DialogContent>
                    <div style={{ position: "relative", width: "100%", height: 300 }}>
                        <Cropper
                            image={imageSrc}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onZoomChange={setZoom}
                            onCropComplete={handleCropComplete}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Snackbar برای نمایش پیام خطا */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}  // مدت زمان نمایش پیام (در میلی‌ثانیه)
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity="error">
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
};

export default ImageCropDialog;
