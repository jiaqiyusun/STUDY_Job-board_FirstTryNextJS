import {createCompany} from "@/app/actions/workosActions";
import {getUser} from "@workos-inc/authkit-nextjs";

export default async function NewCompanyPage() {
  const {user} = await getUser();
  async function handleNewCompanyFormSubmit(data: FormData) {
    'use server';
    const companyName = data.get('newCompanyName');

    // Ensure companyName is not null and is a string
    if (companyName && typeof companyName === 'string') {
        if (user) {
            await createCompany(companyName, user.id);
        }
    } else {
        // Handle the error or provide feedback if companyName is invalid
        console.error('Invalid company name');
    }
}
  if (!user) {
    'Login to use this page';
  }

  return (
    <div className="container">
      <h2 className="text-lg mt-6">Create a new company</h2>
      <p className="text-gray-500 text-sm mb-2">To create a job listing your first need to register a company</p>
      <form
        action={handleNewCompanyFormSubmit}
        className="flex gap-2">
        <input
          name="newCompanyName"
          className="p-2 border border-gray-400 rounded-md styles.quickReply"
          type="text"
          placeholder="company name"/>
        <button type="submit" className="flex gap-2 items-center bg-gray-200 px-4 py-2 rounded-md">
          Create company
        </button>
      </form>
    </div>
  );
}