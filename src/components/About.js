import React from 'react'
import { useState } from 'react'
export default function About(props) {
    const [theme,setTheme] = useState({
        color:"black",
        backgroundColor:"white",
        width:"90%",
        marginInline:"auto",
        theme:"light"

    })

    function toggle(option){
        if(theme.theme!==option && option==="light" ){
            setTheme({
                color:"black",
                backgroundColor:"white",
                width:"90%",
                marginInline:"auto",
                theme:"light"

            })
            console.log(theme,option==="light");

            // return theme
        }else if(theme.theme!==option &&  option==="dark"){
            setTheme({
                color:"white",
                backgroundColor:"black",
                width:"90%",
                marginInline:"auto",
                theme:"dark"
            })

            console.log(theme,option==="light");
            // return theme

        }else if(theme.theme!==option && option==="green"){
            setTheme({
                color:"white",
                backgroundColor:"#032f3c",
                width:"90%",
                marginInline:"auto",
                theme:"green"
            })
            console.log(theme,option==="light");
            // return theme
        }
        // {toggle(props.theme)}

    }
  return (
    <div style={theme}>
        {toggle(props.theme)}
        <div style={theme}class="accordion" id="accordionExample" >
            <div style={theme}class="accordion-item"  >
                <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                1. Convert Text to CamelCase

                </button>
                </h2>
                <div style={theme}id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
                <div style={theme}class="accordion-body" >
                Easily convert your text to camelCase with just a click. This feature transforms your text by capitalizing the first letter of each word (except the first word) and removing spaces, making it perfect for programming and other technical writing needs.
                </div>
                </div>
            </div>

            <div style={theme}class="accordion-item"  >
                <h2 class="accordion-header" >
                <button class="accordion-button collapsed"  type="button" data-bs-toggle="collapse"  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                2. UpperCase Conversion
                </button>
                </h2>
                <div style={theme}id="collapseTwo" class="accordion-collapse collapse"  data-bs-parent="#accordionExample" >
                <div style={theme}class="accordion-body">
                Instantly convert all your text to uppercase letters. This is ideal for creating headings, emphasizing important points, or formatting your content to meet specific style requirements.
                </div>
                </div>
            </div>

            <div style={theme}class="accordion-item"  >
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    3. LowerCase Conversion
                    </button>
                </h2>
                <div style={theme}id="collapseThree" class="accordion-collapse collapse"  data-bs-parent="#accordionExample" >
                <div style={theme}class="accordion-body">
                With the lowerCase conversion feature, you can change all your text to lowercase letters. This ensures consistency and is particularly useful when formatting text to meet standard writing conventions.
                </div>
                </div>
            </div>

            <div style={theme}class="accordion-item"  >
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"  data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                    4. Copy to Clipboard
                    </button>
                </h2>
                <div style={theme}id="collapseFour" class="accordion-collapse collapse"  data-bs-parent="#accordionExample" >
                    <div style={theme}class="accordion-body">
                    Effortlessly copy your text to the clipboard with a single button. This saves you time and ensures that your formatted text is ready to be pasted wherever you need it, whether it's another document, an email, or a web form.
                    </div>
                </div>
            </div>

            <div style={theme}class="accordion-item"  >
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"  data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                5. Remove Extra Spaces
                </button>
                </h2>
                <div style={theme}id="collapseFive" class="accordion-collapse collapse"  data-bs-parent="#accordionExample" >
                <div style={theme}class="accordion-body">
                Clean up your text by removing unnecessary spaces. This feature helps in tidying up your content, ensuring that there are no extra spaces between words or sentences, which can improve readability and presentation.
                </div>
                </div>
            </div>

            <div style={theme}class="accordion-item"  >
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"  data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                6. Clear Text
                </button>
                </h2>
                <div style={theme}id="collapseSix" class="accordion-collapse collapse"  data-bs-parent="#accordionExample" >
                <div style={theme}class="accordion-body">
                Need a fresh start? Use the clear text feature to quickly erase all content from the editor. This is a handy tool for when you want to start over or clear the editor for a new task.
                </div>
                </div>
            </div>

            <div style={theme}class="accordion-item"  >
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"  data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseThree">
                7. Character and Word Count
                </button>
                </h2>
                <div style={theme}id="collapseSeven" class="accordion-collapse collapse"  data-bs-parent="#accordionExample" >
                <div style={theme}class="accordion-body">
                Stay informed about the length of your text with our real-time character and word count. This feature is essential for meeting length requirements, whether you're writing a tweet, a blog post, or an academic paper.
                </div>
                </div>
            </div>

        </div>
            {/* <button onClick={toggle} style={{marginInline:"auto"}}>{themeButton}</button> */}
    </div>
  )
}
