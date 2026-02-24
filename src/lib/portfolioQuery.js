export const PORTFOLIO_QUERY = `{
  "siteSettings": *[_type == "siteSettings"][0]{
    fullName,
    "logoUrl": logo.asset->url,
    email,
    linkedin,
    github,
    footerText
  },
  "home": *[_type == "home"] | order(_updatedAt desc)[0]{
    greeting,
    highlightName,
    roles,
    "profileImageUrl": profileImage.asset->url,
    "resumeUrl": resumeFile.asset->url
  },

  "profile": *[_type == "profile"][0]{
    title,
    paragraphs,
    "hobbyIcons": hobbyIcons[]{
      alt,
      "url": image.asset->url
    }
  },
  "experiences": *[_type == "experience"] | order(order asc){
    company,
    title,
    periodLabel,
    startDate,
    endDate,
    isCurrent,
    direction,
    descriptions,
    "logoUrl": logo.asset->url
  },
  "projects": *[_type == "project"] | order(order asc){
    title,
    duration,
    descriptionBullets,
    tools
  },
  "certifications": *[_type == "certification"] | order(order asc){
    title,
    org,
    issuedDate,
    expiryDate,
    link,
    "imageUrl": image.asset->url
  },
  "skillCategories": *[_type == "skillCategory"] | order(order asc){
    category,
    items[]{
      label,
      imageKey,
      "iconUrl": icon.asset->url
    }
  },
  "education": *[_type == "education"] | order(order asc){
    institution,
    "logoUrl": logo.asset->url,
    degree,
    location,
    date,
    gpa,
    gpaScale,
    achievements
  }
}`;
