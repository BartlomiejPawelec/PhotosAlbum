import {useState} from 'react';

const useForm = () => {
    const [form, setForm] = useState({
        login: '',
        password: ''
    });
}

export default useForm;