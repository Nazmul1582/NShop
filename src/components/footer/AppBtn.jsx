const AppBtn = ({icon, text}) => {
    return (
        <button className="flex items-center gap-2 text-sm text-gray-600 border border-[#8a878466] rounded-xl px-3 py-2">
            {icon}
            <span>{text}</span>
        </button>
    );
};

export default AppBtn;