
const HeadingTitles = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-600 mb-4">----{subHeading}----</p>
            <h3 className="text-4xl uppercase border-y-4 py-2">{heading}</h3>

        </div>
    );
};

export default HeadingTitles;