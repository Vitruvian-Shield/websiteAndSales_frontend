import { TextField, Box, InputLabel, FormControl } from "@mui/material"
import { useEffect, useRef, useState } from "react"
const FormInput = ({
    lable,
    value,
    fucused,
    borderRadius,
    height,
    setValue,
    placeholder,
    inputname,
    type,
    requierd,
    stuckRight,
    disabled,
    hiddenError
}) => {
    const c545454 = '#454545'
    const c595959 = '#595959'
    const c8c8c8c = '#8c8c8c'
    const c262626 = '#262626'
    const cfcfcfc = '#fcfcfc'
    const cbebebe = '#bebebe'
    const cbfbfbf = '#bfbfbf'
    const c5ea5d4 = '#5ea5d4'
    const cffffff = '#ffffff'
    const cf5f5f5 = '#f5f5f5'
    const f10 = '10px'
    const f12 = '12px'
    const f14 = '14px'
    const f16 = '16px'
    const f18 = '18px'
    const f20 = '20px'
    const f23 = '23px'
    const fontFamily = 'Lato'
    const [helper, setHelper] = useState('')
    const inputRefs = useRef([]);
    useEffect(() => {
        // Set focus on the first input when the component mounts
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);
    return (
        <FormControl variant="outlined" fullWidth>
            <InputLabel shrink htmlFor="my-input"
                sx={{
                    position: 'absolute',
                    top: 2,
                    px: '10px',
                    color: `${c595959}!important`,
                    fontSize: { xs: `${f14}` },
                    fontWeight: 500,
                    fontFamily: 'Inter',
                    background: `${cfcfcfc}`,
                }}>
                {lable}
            </InputLabel>
            <TextField
                InputProps={inputname === 'weight' ? { endAdornment: <Box sx={{ fontFamily: 'Inter', fontSize: '14px' }}>kg</Box> } : inputname === 'height' ? { endAdornment: <Box sx={{ fontFamily: 'Inter', fontSize: '14px' }}>cm</Box>, } : null}
                autoComplete="organization"
                disabled={disabled}
                helperText={!hiddenError && helper}
                error={helper !== '' ? true : false}
                // focused={fucused}
                sx={{
                    width: '100%',
                    boxSizing: 'border-box',
                    height: height ? height : '50px',
                    '& fieldset': {
                        overflow: 'hidden',
                        borderRadius: { xs: borderRadius ? borderRadius : '5px', sm: borderRadius ? borderRadius : '8px' },
                        borderTopRightRadius: { xs: `${stuckRight ? '0px!important' : '5px'}`, sm: `${stuckRight ? '0px!important' : '8!important'}` },
                        borderBottomRightRadius: { xs: `${stuckRight ? '0px!important' : '5px'}`, sm: `${stuckRight ? '0px!important' : '8!important'}` },
                        boxSizing: 'border-box',
                        border: { xs: `1px solid ${c8c8c8c}!important`, md: `1px solid ${c8c8c8c}!important` },


                    },
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                        border: { xs: `1px solid ${helper ? 'red' : c5ea5d4}!important`, md: `1px solid ${helper ? 'red' : c5ea5d4}!important` },
                        borderRadius: { xs: borderRadius ? borderRadius : '5px', sm: borderRadius ? borderRadius : '8px' },
                        borderTopRightRadius: { xs: `${stuckRight ? '0px!important' : '5px'}`, sm: `${stuckRight ? '0px!important' : '8!important'}` },
                        borderBottomRightRadius: { xs: `${stuckRight ? '0px!important' : '5px'}`, sm: `${stuckRight ? '0px!important' : '8!important'}` },

                    },
                    '& input': {
                        fontFamily: 'Inter',
                        p: '24!important',
                        boxSizing: 'border-box',
                        height: '100%',
                        px: '13px!important',
                        background: `${disabled ? cf5f5f5 : cffffff}`,
                        fontSize: `${f14}`,
                        borderRadius: { xs: borderRadius ? borderRadius : '5px', sm: borderRadius ? borderRadius : '8px' },
                        borderTopRightRadius: { xs: `${stuckRight ? '0px!important' : '5px'}`, sm: `${stuckRight ? '0px!important' : '8!important'}` },
                        borderBottomRightRadius: { xs: `${stuckRight ? '0px!important' : '5px'}`, sm: `${stuckRight ? '0px!important' : '8!important'}` },

                    },
                    '& input::placeHolder': { fontFamily: `${fontFamily}`, color: `${c262626}`, fontSize: { xs: '12.64px', md: `${f14}` }, fontWeight: 400 },
                    '& label': {
                        marginTop: (them) => them.spacing(-0.5),
                        color: `${c595959}!important`,
                        fontSize: { xs: `${f14}` },
                        fontWeight: 500,
                        fontFamily: 'Inter',
                        background: `${cfcfcfc}`,
                        position: 'absolute'


                    },
                }}
                InputLabelProps={{
                    shrink: true, // Ensures label is always shrunk
                }}
                // label={lable}
                value={value}
                placeholder={placeholder}
                name={inputname}
                type={type}
                onChange={(event) => {

                    if (inputname === 'postal_code') {
                        setTimeout(() => {
                            if (event.target.value.length === 0) {
                                setHelper('postal_code is invalid')
                                setValue(event.target.value);
                            }
                        }, 0);
                        if (/(^\d{4}-\d{3}?)(.*)/.test(event.target.value) || /^[1-9]\d{3}$/.test(event.target.value)) {
                            setHelper('')
                            setValue(event.target.value);
                        }
                        else {
                            setHelper('postal_code is invalid')
                            setValue(event.target.value);

                        }
                    }
                    if (inputname === 'city') {
                        setTimeout(() => {
                            if (event.target.value.length === 0) {
                                setHelper('city is invalid')
                                // setRequierd({ ...requierd, city: false })
                                setValue(event.target.value);
                            }
                        }, 0);
                        if (!/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(event.target.value)) {
                            setHelper('city is invalid')
                            // setRequierd({ ...requierd, city: false })
                            setValue(event.target.value);
                        }
                        else {
                            setHelper('')
                            // setRequierd({ ...requierd, city: true })
                            setValue(event.target.value);
                        }
                    }
                    if (inputname === 'country') {
                        setTimeout(() => {
                            if (event.target.value.length === 0) {
                                setHelper('country is invalid')
                                // setRequierd({ ...requierd, country: false })
                                setValue(event.target.value);
                            }
                        }, 0);
                        if (!/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(event.target.value)) {
                            setHelper('country is invalid')
                            // setRequierd({ ...requierd, country: false })
                            setValue(event.target.value);
                        }
                        else {
                            setHelper('')
                            // setRequierd({ ...requierd, country: true })
                            setValue(event.target.value);
                        }
                    }
                    if (inputname === 'street') {
                        setTimeout(() => {
                            if (event.target.value.length === 0) {
                                setHelper('street is invalid')
                                // setRequierd({ ...requierd, street: false })
                                setValue(event.target.value);
                            }
                        }, 0);
                        if (!/[A-Za-z0-9'\.\-\s\,]/.test(event.target.value)) {
                            setHelper('street is invalid')
                            // setRequierd({ ...requierd, street: false })
                            setValue(event.target.value);
                        }
                        else {
                            setHelper('')
                            // setRequierd({ ...requierd, street: true })
                            setValue(event.target.value);
                        }
                    }

                    if (event.target.value.length < 40) {
                        if (inputname === 'website_url') {
                            setTimeout(() => {
                                if (event.target.value.length === 0) {
                                    setValue(event.target.value);
                                    setHelper('URL is invalid')
                                }
                            }, 0);
                            if (!/^(www\.|http:\/\/|https:\/\/|http:\/\/www\.|https:\/\/www\.)[a-z0-9]+\.[a-z]{2,4}$/.test(event.target.value)) {
                                setValue(event.target.value);
                                setHelper('URL is invalid')
                            }
                            else {

                                setValue(event.target.value);
                                setHelper('')

                            }
                        }
                        if (inputname === 'name') {
                            setTimeout(() => {
                                if (event.target.value.length === 0) {
                                    setHelper('laboratory name is invalid')
                                    // setRequierd({ ...requierd, name: false })
                                    setValue(event.target.value)
                                }
                            }, 0);
                            if (!/[A-Za-z0-9'\.\-\s\,]/.test(event.target.value)) {
                                setHelper('laboratory name is invalid')
                                // setRequierd({ ...requierd, name: false })
                                setValue(event.target.value)
                            }

                            else {
                                setValue(event.target.value);
                                setHelper('')
                                // setRequierd({ ...requierd, name: true })
                            }
                        }

                        if (inputname === 'ethicalCode') {
                            setTimeout(() => {
                                if (event.target.value.length === 0) {
                                    setHelper('Ethical code is invalid')
                                    // setRequierd({ ...requierd, ethicalCode: false })
                                    setValue(event.target.value)
                                }
                            }, 0);
                            if (!/[A-Za-z0-9'\.\-\s\,]/.test(event.target.value)) {
                                setHelper('Ethical code is invalid')
                                // setRequierd({ ...requierd, ethicalCode: false })
                                setValue(event.target.value)
                            }

                            else {
                                setValue(event.target.value);
                                setHelper('')
                                // setRequierd({ ...requierd, ethicalCode: true })
                            }
                        }
                        if (inputname === 'researcherTitle') {
                            setTimeout(() => {
                                if (event.target.value.length === 0) {
                                    setHelper('Research title is invalid')
                                    // setRequierd({ ...requierd, researcherTitle: false })
                                    setValue(event.target.value)
                                }
                            }, 0);
                            if (!/[A-Za-z0-9'\.\-\s\,]/.test(event.target.value)) {
                                setHelper('Research title is invalid')
                                // setRequierd({ ...requierd, researcherTitle: false })
                                setValue(event.target.value)
                            }

                            else {
                                setValue(event.target.value);
                                setHelper('')
                                // setRequierd({ ...requierd, researcherTitle: true })
                            }
                        }

                        if (inputname === 'first_name') {
                            setTimeout(() => {
                                if (event.target.value.length === 0) {
                                    setHelper('First name is invalid')
                                    // setRequierd({ ...requierd, firstname: false })
                                }
                                else {
                                    if (!/^\s*([A-Za-z]{1,}(|[-']|))+[A-Za-z]+\.?\s*$/.test(event.target.value)) {
                                        setHelper('First name is invalid')
                                        // setRequierd({ ...requierd, firstname: false })
                                    }
                                    else {
                                        setValue(event.target.value)
                                        setHelper('')
                                        // setRequierd({ ...requierd, firstname: true })
                                    }
                                }
                            }, 0);


                        }
                        if (inputname === 'last_name') {
                            setTimeout(() => {
                                if (event.target.value.length === 0) {
                                    setHelper('Last name is invalid')
                                    // setRequierd({ ...requierd, lastName: false })
                                }
                            }, 0);
                            if (!/^\s*([A-Za-z]{1,}(|[-']|))+[A-Za-z]+\.?\s*$/.test(event.target.value)) {
                                setHelper('Last name is invalid')
                                // setRequierd({ ...requierd, lastName: false })
                            }

                            else {
                                setValue(event.target.value)
                                setHelper('')
                                // setRequierd({ ...requierd, lastName: true })
                            }
                        }
                        if (inputname === 'height') {
                            setTimeout(() => {
                                if (event.target.value.length === 0) {
                                    setValue(event.target.value)
                                    setHelper('height is requierd')
                                    // setRequierd({ ...requierd, height: false })
                                }
                            }, 0);
                            if (!/^[1-9][0-9][0-9]+(\.[0-9]{1,2})?$/.test(event.target.value) || event.target.value > 300) {
                                setValue(event.target.value)
                                setHelper('height is requierd')
                                // setRequierd({ ...requierd, height: false })
                            }
                            else {
                                setValue(event.target.value)
                                setHelper('')
                                // setRequierd({ ...requierd, height: true })
                            }

                        }
                        if (inputname === 'weight') {
                            setTimeout(() => {
                                if (event.target.value.length === 0) {
                                    setValue(event.target.value)
                                    setHelper('weight is invalid')
                                    // setRequierd({ ...requierd, weight: false })
                                }
                            }, 0);
                            if (!/^[1-9][0-9]+(\.[0-9]{1,2})?$/.test(event.target.value) || event.target.value > 500) {

                                setValue(event.target.value)
                                setHelper('weight is invalid')
                                // setRequierd({ ...requierd, weight: false })
                            }
                            else {
                                setValue(event.target.value)
                                setHelper('')
                                // setRequierd({ ...requierd, weight: true })
                            }


                        }
                        if (inputname === 'email') {
                            setTimeout(() => {
                                if (event.target.value.length === 0) {
                                    setHelper('')
                                    // setRequierd({ ...requierd, email: false })
                                }
                            }, 0);
                            if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)) {
                                setHelper('email is invalid')
                                // setRequierd({ ...requierd, email: false })
                            }
                            else {
                                setValue(event.target.value);
                                // setRequierd({ ...requierd, email: true })
                                setHelper('')
                            }
                        }
                        if (inputname !== 'phone_number' && inputname !== 'height' && inputname !== 'weight' && inputname !== 'duration') {
                            if (event.target.value.length < 50) {

                                setValue(event.target.value);

                            }
                            else {
                                setValue(value)

                            }
                        }
                        if (inputname === 'duration') {
                            if (event.target.value.length < 6) {
                                setValue(event.target.value);
                            }
                            else {
                                setValue(value)
                            }
                        }

                    }
                    else {
                        setValue(value)
                    }
                }}
            />
        </FormControl>
    )
}

export default FormInput