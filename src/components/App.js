import React, { useState, useEffect } from 'react'
import Editor from './Editor'

const App = () => {
    const [html, setHtml ] = useState('') 
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')
    const [srcDoc, setSrcDoc] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
                <html>
                    <body>${html}<body>
                    <style>${css}<body>
                    <script>${js}<script>    
                </html>
            `)
        }, 250)

        return () => clearTimeout(timeout)
    },[html, css, js])

    return (
        <>
            <div className="pane top-pane">
                <Editor language="xml" 
                displayName="HTML"
                onChange={setHtml}
                value={html}
                />
                <Editor language="css" 
                displayName="CSS"
                onChange={setCss}
                value={css}
                />
                <Editor language="js" 
                displayName="JAVASCRIPT"
                onChange={setJs}
                value={js}
                />
            </div>
            <div className="pane">
                <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                />
            </div>
        </>
    )
}

export default App
