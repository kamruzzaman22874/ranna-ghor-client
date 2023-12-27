const Updates = () => {
    return (
        <div className="text-center bg-[#F0F0F0] p-10 rounded space-y-5">
            <h2 className="text-xl font-semibold">Get Lastest Updates</h2>
            <hr className="w-2/3 mx-auto" />
            <h3 className="text-[#885d5d]">Newsletter Subscribe</h3>

            <form>
                <input className="bg-[#FFFFFF] px-10 rounded outline-none py-3 w-2/3 mb-3" type="email" name="" id="" /> <br />
                <input className="bg-[#FF4A52] px-16 rounded py-3 w-2/3 uppercase text-white" type="submit" value="Subscribe" />
            </form>
        </div>
    );
};

export default Updates;