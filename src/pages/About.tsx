import { Container, Jumbotron } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'
import emoji from 'remark-emoji'
import { useEffect, useState } from "react";

//@ts-ignore
import file from "./About.md"

function AboutPage(){
    const aboutMarkdownPath = require("./About.md")
    const [markdown, setMarkdown] = useState("")

    console.log(aboutMarkdownPath)

    useEffect(() => {
        fetch(file)
          .then((res) => res.text())
          .then((text) => setMarkdown(text));
      }, []);

    return(
        <>
        <p></p>
        <Container>
            <ReactMarkdown plugins={[gfm, emoji]} children={markdown}/>
        </Container>
        </>
    )
}

export default AboutPage