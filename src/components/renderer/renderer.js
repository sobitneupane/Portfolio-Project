import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

function headingRenderer(props) {
    return <h1 className={"text-2xl text-center font-bold"} style={{paddingBottom:30}}>{props.children}</h1>
}

function paragraphRenderer(props) {
    return <p style={{paddingBottom:20}}>{props.children}</p>
}

function anchorRenderer(props) {
    return (<a 
        className="underline"
        target="_blank"
        href={props.href} >
            {props.children}
    </a>);
}

function code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
        <SyntaxHighlighter
        children={String(children).replace(/\n$/, "")}
        language={match[1]}
        PreTag='section' // parent tag
        customStyle={{marginLeft:20, marginRight:20, marginBottom:20}}
        showLineNumbers
        style={prism}
        {...props}
        />
    ) : (
        <code className={className} {...props}>
            {children}
        </code>
    );
};


export {
    headingRenderer,
    paragraphRenderer,
    anchorRenderer,
    code
}