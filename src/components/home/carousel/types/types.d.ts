import { Theme } from "@mui/material";
import * as React from "react";

export type ButtonProps = {
    content: string;
};

export type ChatType = {
    imageUrl: string;
    name: string;
    isActive: boolean;
}

export type LoginType = {
    username: string;
    password: string;
    keepMeLoggedIn: boolean
}

export type SignUpType = {
    email: string;
    username: string;
    password: string;
    termAndConditions: boolean
}

export type TabPanelProps = {
    children?: React.ReactNode;
    index: string;
    value: string;
}

export type ForgotPasswordType = {
    email: string;
}

export type ResetPasswordType = {
    password: string;
}

// props
export type chatsProps = {
    chats: ChatType[];
    setActiveChat: (selectedChat: ChatType) => void;
};

export type LoginProps = {
    getLoginData: (values: LoginType) => void;
    onForgotPasswordClicked: () => void
}

export type SignUpProps = {
    getSignUpData: (values: SignUpType) => void;
}

export type authenticationProps = {
    getLoginData: (values: LoginType) => void;
    onForgotPasswordClicked: () => void;
    getSignUpData: (values: SignUpType) => void;
    onCancel: () => void;
};

export type splashScreenProps = {
    progressBarValue: number;
    tips: string;
};

export type forgotPasswordProps = {
    getForgotPasswordData: (values: ForgotPasswordType) => void;
    onBackClicked: () => void;
    onCancel: () => void;
};

export type ResetPasswordProps = {
    getResetPasswordData: (values: ResetPasswordType) => void;
    onBackClicked: () => void;
    onCancel: () => void;
};

export type sendOtpProps = {
    confirmOtpData: (values: string) => void;
    onResendClicked: () => void;
    onBackClicked: () => void;
    onCancel: () => void;
};

// Banner types
export type BannerItemType = {
    theme?:any,
    data?:any,
    title?:string,
    description?:string,
    content?:any,
}

interface IBanner {
    bannerItems?: BannerItemType[],
    onClick?: (banner: BannerItemType) => void;
    loading?:boolean;
    bgImage?:string,
    data?: any,
    content?:any,
}

// NFT Card
export type NFTCardType = {
    tokenId?: string;
    creator?: string;
    bgImage?: string;
    name?: string;
    description?: string;
    category?: string;
    contractAddress?: string;
    quantity?: number;
    collectionName?: string;
    price?: number;
}

export interface INFTCard {
    nftCard: NFTCardType;
    onClick?: (card: NFTCardType) => void;
}

// Collection Card
export type CollectionCardType = {
    image?: string;
    name?: string;
    type?: string;
}

interface ICollectionCard {
    collectionCard: CollectionCardType,
    onClick: (card: CollectionCardType) => void;
}

// Character Type
export type CharacterType = {
    label: string;
    value?: string;
    showBorder?: boolean;
    showCopy?: boolean;
}

// Property type

export type PropertyType = {
    name: string;
    attributes: string[]
}

interface IProperty {
    property: PropertyType
}

// Discover type
export interface IDiscover {
    bannerItems?: BannerItemType[];
    onBannerClick?: (banner: BannerItemType) => void;
    nftList?: NFTCardType[];
    onNftClick?: (nft: NFTCardType) => void;
}

// Browse
export interface IBrowse {
    collection: CollectionCardType[],
    onCollectionClick: (collection: CollectionCardType) => void;
}

// NFT Detail
export interface INftDetail {
    nft: NFTCardType;
    onBuyClick: (nft: NFTCardType) => void;
    properties: PropertyType[]
}

// Collection Detail
export type CollectionType = {
    title?: string;
    description?: string;
    bannerImage?: string;
    blockchain?: string;
    collectionAddress?: string;
    creatorID?: string;
    category?: string;
}

export interface ICollection {
    collection?: CollectionType;
    nftList?: NFTCardType[],
    nftClicked?: (card: NFTCardType) => void;
}

