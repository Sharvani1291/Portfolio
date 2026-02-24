import { defineArrayMember, defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'fullName', title: 'Full Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'github', title: 'GitHub URL', type: 'url' }),
    defineField({ name: 'footerText', title: 'Footer Text', type: 'string' }),
  ],
})

export const home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({ name: 'greeting', title: 'Greeting', type: 'string' }),
    defineField({ name: 'highlightName', title: 'Highlight Name', type: 'string' }),
    defineField({ name: 'roles', title: 'Roles', type: 'string' }),
    defineField({ name: 'profileImage', title: 'Profile Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'resumeFile', title: 'Resume PDF', type: 'file', options: { accept: '.pdf' } }),
  ],
})

export const profile = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string' }),
    defineField({
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'hobbyIcons',
      title: 'Hobby Icons',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
          ],
        }),
      ],
    }),
  ],
})

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({ name: 'company', title: 'Company', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'title', title: 'Role Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'periodLabel', title: 'Period Label', type: 'string' }),
    defineField({ name: 'startDate', title: 'Start Date', type: 'date' }),
    defineField({ name: 'endDate', title: 'End Date', type: 'date' }),
    defineField({ name: 'isCurrent', title: 'Current Role', type: 'boolean', initialValue: false }),
    defineField({
      name: 'direction',
      title: 'Timeline Direction',
      type: 'string',
      options: { list: ['left', 'right'] },
      initialValue: 'left',
    }),
    defineField({ name: 'logo', title: 'Company Logo', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'descriptions',
      title: 'Bullet Points',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
  ],
})

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'duration', title: 'Duration', type: 'string' }),
    defineField({
      name: 'descriptionBullets',
      title: 'Description Bullets',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'tools',
      title: 'Tools/Tech',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
  ],
})

export const certification = defineType({
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'org', title: 'Organization', type: 'string' }),
    defineField({ name: 'issuedDate', title: 'Issued Date', type: 'string' }),
    defineField({ name: 'expiryDate', title: 'Expiry Date', type: 'string' }),
    defineField({ name: 'link', title: 'Credential Link', type: 'url' }),
    defineField({ name: 'image', title: 'Certificate Image', type: 'image', options: { hotspot: true } }),
  ],
})

export const skillCategory = defineType({
  name: 'skillCategory',
  title: 'Skill Category',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({ name: 'category', title: 'Category', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'items',
      title: 'Skills',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'imageKey', title: 'Image Key (optional)', type: 'string' }),
            defineField({ name: 'icon', title: 'Icon', type: 'image', options: { hotspot: true } }),
          ],
        }),
      ],
    }),
  ],
})

export const education = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({ name: 'institution', title: 'Institution', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'logo', title: 'Institution Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'degree', title: 'Degree', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'date', title: 'Graduation/Completion Date', type: 'string' }),
    defineField({ name: 'gpa', title: 'GPA', type: 'number' }),
    defineField({ name: 'gpaScale', title: 'GPA Scale', type: 'number', initialValue: 4 }),
    defineField({
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
  ],
})
