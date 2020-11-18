define(function (require, exports, module) {
    
    // importing CodeMirror Module which is already comes with brackets
    var CodeMirror = brackets.getModule("thirdparty/CodeMirror/lib/codemirror"),
        // importing Brackets LanguageManager
        LanguageManager = brackets.getModule("language/LanguageManager");
    
    // Defining a CodeMirror CodeMode
    CodeMirror.defineSimpleMode("christine", {
        start: [
            {
                regex: /[\t\ ]*(\w+)\ *(([.#][\w-_]+\ *)*)[\t\ ]*$/,
                token: "keyword",
                indent : "true",
                sol: "true"
            },
            {
                regex: /([\t\ ]*[^"' ]+)(\s*:)(.*)$/,
                token: ["variable","punctuation","variable-2"],
                sol: "true"
            },
            {
                regex: /"(?:[^\\]|\\.)*?(?:"|$)/,
                token: "string"
            }
        ]
    });
    
    // Defining Langauge MIME Type
    CodeMirror.defineMIME("text/christine", "christine");
    
    // Defining New Langauge
    LanguageManager.defineLanguage("christine", {
        name: "Christine",
        mode: ["christine", "text/christine"],
        fileExtensions: ["chris"]
    });
    
});