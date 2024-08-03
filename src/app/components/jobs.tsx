import JobRow from "./jobrow";

export default function Jobs(){
    return(
        <div className="bg-gray-200 p-4 rounded-xl py-4 px-6">
            <h2 className="container font-bold mb-4">Recent jobs</h2>   
            <div className="flex flex-col gap-4">
                <JobRow/>
                <JobRow/>
                <JobRow/>
                <JobRow/>
            </div> 
        </div>
    );
}