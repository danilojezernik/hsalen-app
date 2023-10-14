import {AngularEditorConfig} from "@kolkov/angular-editor";

export const sharedEditorConfigClient: AngularEditorConfig = {
  editable: true,
  spellcheck: false,
  minHeight: '15rem',
  maxHeight: '50rem',
  placeholder: 'Tukaj vnesite svoje sporočilo...',
  translate: 'no',
  sanitize: false,
  outline: true,
  showToolbar: false,
  defaultParagraphSeparator: 'p',
  toolbarHiddenButtons: [
    [
      'undo',
      'redo',
      'bold',
      'italic',
      'underline',
      'strikeThrough',
      'subscript',
      'superscript',
      'justifyLeft',
      'justifyCenter',
      'justifyRight',
      'justifyFull',
      'indent',
      'outdent',
      'insertUnorderedList',
      'insertOrderedList',
      'heading',
      'fontName'
    ],
    [
      'fontSize',
      'textColor',
      'backgroundColor',
      'customClasses',
      'link',
      'unlink',
      'insertImage',
      'insertVideo',
      'insertHorizontalRule',
      'removeFormat',
      'toggleEditorMode'
    ]
  ]
};
