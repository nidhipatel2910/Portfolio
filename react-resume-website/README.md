# React Resume Website

A responsive, dynamic portfolio website built using **React** and **Tailwind CSS**, deployed on **Vercel**.

---

## 🚀 Features Implemented

✅ Built using **Create React App**  
✅ Resume broken into **5+ reusable components**:
- Header
- About
- Projects
- Skills
- Contact

✅ Components organized into dedicated folders for better structure  
✅ **Props** used in at least two components (e.g., passing data to `Project` and `Skill` components)  
✅ **useState** for UI behavior (e.g., theme toggle, expanded views)  
✅ **Conditional rendering** for showing/hiding content dynamically  
✅ **Dynamic lists** using `.map()` (e.g., displaying skills and projects)  
✅ **Tailwind CSS** for modular, modern styling – no global CSS!  
✅ Fully **responsive layout** with mobile breakpoints  
✅ Resume includes sections:
- Education
- Skills
- Experience
- Contact

✅ Working **navigation** (smooth scrolling)  
✅ Deployed on **Vercel** with a valid public URL  
✅ **Git version control** with a public **GitHub repository**

---

## 💡 Challenges & Solutions

### 🛠️ Private Key Detection

While pushing the project to GitHub, I faced an error due to an accidentally committed **SSH private key**. GitHub’s secret scanning feature blocked the push to protect the repository.

**Solution:**
- I identified the sensitive file using:
  ```bash
  git rev-list --objects --all | findstr <blob-id>

I removed the sensitive file from the project and added it to .gitignore to ensure it won’t be tracked in the future.

I used:

bash
Copy
Edit
git rebase -i HEAD~5
to remove the commit that included the key.

Finally, I force pushed the clean history to GitHub:

bash
Copy
Edit
git push --force origin master
This experience taught me the importance of not committing sensitive data and using .gitignore to prevent future mistakes!