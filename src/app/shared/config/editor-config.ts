import {AngularEditorConfig} from "@kolkov/angular-editor";

export const sharedEditorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: false,
    minHeight: '5rem',
    maxHeight: '15rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: false,
    // toolbarPosition: 'top',
    outline: true,
    // showToolbar: false,
    defaultParagraphSeparator: 'p',
    toolbarHiddenButtons: [
        [
            'strikeThrough',
            'indent',
            'outdent',
            'fontName'
        ],
        [
            'fontSize',
            'backgroundColor',
            'customClasses',
            'insertVideo',
            'insertHorizontalRule',
            'removeFormat',
            'toggleEditorMode'
        ]
    ]
};
