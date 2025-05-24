import { toast } from 'react-toastify';

export const notifySuccess = (message) => {
    toast.success(message, { containerId: 'globalContainer' });
};

export const notifyFail = (message) => {
    toast.error(message, { containerId: 'globalContainer' });
};