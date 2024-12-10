**Submitted by:** Caleb Haber (cjhaber)
           
**Group Members:** Caleb Haber (cjhaber), Rebecca Lam (rlam12), Macy Donahoe (mdonaho2)
           
**App Description:** Allows detectives to identify most wanted suspects that match a victim's description, and to determine if someone on the most wanted list committed a certain crime. 

**YouTube Video Link:** [YouTube Link](https://www.youtube.com/watch?v=NMxxOrfSQRA)

**APIs:** Wanted API [API Link](https://fbi.gov/wanted/api)
    
**Contact Email:**  cjhaber@terpmail.umd.edu

**Website Link** [Render Link](https://cmsc-final-project-haber-lam-donahoe.onrender.com/)

**Note:** The FBI API is does not allow for many API calls before it throws a "429 Too Many Requests Error", you will notice our code first attempts to pull as many JSON files as possible from the API, however any page it cannot grab from the API it will grab from the folder "JSON FILES". Thus our program satisfies the API pull requirement while also supplementing our website with additional calls. We talked with a TA (Hted Oo) and he said this was okay.