import { useState } from "react";

interface Props {
    onClickEvent: (text: string) => void;
}

export default function Editor(props: Props) {
    const [text, setText] = useState("");

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };
    const onClickEvent = () => {
        props.onClickEvent(text);
        setText("");
    };

    return (
        <div>
            <input value={text} onChange={onChangeInput} />
            <button onClick={onClickEvent}>추가</button>
        </div>
    );
}
