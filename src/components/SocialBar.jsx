import React from "react"
import { GrGithub } from 'react-icons/gr';
import { GrLinkedinOption} from 'react-icons/gr';
function SocialBar() {
    return (
    <div className=" pt-7">
        <div className=" flex flex-row justify-start">
            <div className="hover:opacity-50 ">
                <a href="https://github.com/krishi-saripalli">
                    <GrGithub color="#17a34a" size="3rem"></GrGithub>
                </a> 
            </div>
            <div className="px-5 hover:opacity-50">
                <a href="https://www.linkedin.com/in/krishi-saripalli-8b48a4142/">
                    <GrLinkedinOption color="#17a34a" size="3rem"></GrLinkedinOption>
                </a>
            </div>
        
        </div>

    </div>
    
    )
}
export default SocialBar
