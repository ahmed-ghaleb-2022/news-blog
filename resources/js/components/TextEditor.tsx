import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { useEffect } from 'react';

function TextEditor({ onTextChange, initialText }:  { onTextChange: (html: string) => void , initialText?: string }) {
    useEffect(() => {


        const quill = new Quill('#editor', {
            theme: 'snow',
        });


         if (initialText) {
            quill.root.innerHTML = initialText;
        }


        quill.on('text-change', () => {
            onTextChange(quill.root.innerHTML);
        });
    }, []);

    return <div id="editor"></div>;
}

export default TextEditor;
