export const useInput = (inititalValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChanage = event => {
        const { target : { value } } = event;
        let willUpdate = true;
        if(typeof validator === 'function')
        {
            willUpdate = validator(value);
        }
        if(willUpdate)
        {
            setValue(value);
        }
    };
    return { value, onChange };
}