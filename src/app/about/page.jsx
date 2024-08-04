import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

export default function page() {
    return (
        <>
        <Header/>
        <div class="text-center p-10">
                <h1 class="font-bold text-4xl mb-4">About Us</h1>

            </div>
            <section className="w-[100%] py-[50px] bg-[#ccc]">
                <div className="max-w-[1320px] mx-auto grid grid-cols-2 gap-[30px] justify-center ">
                    <div className="w-[100%]">
                        <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg" />
                    </div>
                    <div>
                        <h1 className="text-[20px] font-bold m-[30px]">Welcome to our ecommerse website</h1>
                        <p className="mb-[20px]">the term was coined and first employed by Robert Jacobson, Principal Consultant to the California State Assemblys Utilities & Commerce Committee, in the title and text of Californias Electronic Commerce Act, carried by the late Committee Chairwoman Gwen Moore (D-L.A.) and enacted in 1984. </p>
                        <p className="mb-[20px]">the term was coined and first employed by Robert Jacobson, Principal Consultant to the California State Assemblys Utilities & Commerce Committee, in the title and text of Californias Electronic Commerce Act, carried by the late Committee Chairwoman Gwen Moore (D-L.A.) and enacted in 1984. </p>
                        <p className="mb-[20px]">the term was coined and first employed by Robert Jacobson, Principal Consultant to the California State Assemblys Utilities & Commerce Committee, in the title and text of Californias Electronic Commerce Act, carried by the late Committee Chairwoman Gwen Moore (D-L.A.) and enacted in 1984. </p>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
