const handleKeypress = (e, fun) => {
    if (e.keyCode === 13) {
        fun();
    }
};

export default handleKeypress;