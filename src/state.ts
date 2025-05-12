import { atom } from 'jotai'

const formAtom = atom({
    userId: '',
    campaignType: '',
    campaignSubType: '',
    goal: '3000',
    timeToPayBack: '24',
    paybackPlan: 'monthly',
    title: '',
    description: '',
    picture: null,
    video: null,
    urls: [],
})

export {formAtom}