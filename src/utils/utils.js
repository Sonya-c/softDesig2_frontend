export const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

export const handleChange = (setFormData, event) => {
    const { name, value } = event.target;
    console.log(name, value);

    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
    }));
};