
import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import styles from '../../styles/styles'
import {headingRenderer,paragraphRenderer,anchorRenderer,code} from '../renderer/renderer.js'
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

class BlogMain extends Component {
    constructor(props) {
      super(props)

      this.state = { terms: null }
    }
  
    componentDidMount() {
        import(`../../blogPosts/posts/${this.props.match.params.id}.md`).then(res=> { 
        fetch(res.default).then((response) => response.text()).then((text) => {
            this.setState({ terms: text })
        })
    })
    }
    
   
    render() {
      return (
        <div className='blogContent' style={styles.blogContent}>
            <ReactMarkdown 
                components = {{
                    h1: headingRenderer,
                    p: paragraphRenderer,
                    a: anchorRenderer,
                    code
                }} 
                children={this.state.terms}
            />
        </div>
      )
    }
  }
  
  export default BlogMain