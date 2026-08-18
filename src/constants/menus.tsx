// components
import Box from '@mui/material/Box'

// icons
import WorkOutlinedIcon from '@/assets/icons/material-symbols--work-outline.svg'
import HomeOutlinedIcon from '@/assets/icons/fluent--home-32-regular.svg'
import LayersOutlinedIcon from '@/assets/icons/fluent--layer-24-regular.svg'
import ContactOutlinedIcon from '@/assets/icons/fluent--contact-card-group-28-regular.svg'
import InfoOutlinedIcon from '@/assets/icons/jam--info.svg'
import EmailOutlinedIcon from '@/assets/icons/eva--email-outline.svg'
import PaperOutlinedIcon from '@/assets/icons/quill--paper.svg'
import ShieldOutlinedIcon from '@/assets/icons/hugeicons--shield-01.svg'

export const companyMenus: IMenu[] = [
  {
    label: 'Home',
    path: '/',
    icon: (
      <Box component={HomeOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'About',
    path: '/#home-about',
    icon: (
      <Box component={InfoOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Who We Work With',
    path: '/#home-motivation',
    icon: (
      <Box component={WorkOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Services',
    path: '/#home-service',
    icon: (
      <Box component={LayersOutlinedIcon} sx={{ width: 20, height: 'auto' }} />
    ),
  },
  {
    label: 'Contact',
    path: '/#home-contact',
    icon: (
      <Box component={ContactOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
]

export const supportLinks: IMenu[] = [
  {
    label: 'Start a Conversation',
    path: '/#home-contact',
    icon: (
      <Box component={EmailOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Terms of Service',
    path: '/terms-of-service',
    icon: (
      <Box component={PaperOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Privacy Policy',
    path: '/privacy-policy',
    icon: (
      <Box component={ShieldOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
]
