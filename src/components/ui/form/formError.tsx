import { FaExclamationTriangle } from "react-icons/fa";

interface formErrorProps {
    message?: string;
};

export const FormError = ({ message }: formErrorProps) => {
    if (!message) {
        return null;
    } else {
        return (
            <div className="bg-red-100 p-3 rounded-md flex items-center mt-4 gap-x-2 text-sm text-red-600">
                <FaExclamationTriangle className="size-4" />
                <p>{message}</p>
            </div>
        )
    }
}
