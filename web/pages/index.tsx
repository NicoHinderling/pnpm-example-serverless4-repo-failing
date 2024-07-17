import { getAccessToken, getSession } from '@auth0/nextjs-auth0';
import FullPageLayout from '../components/FullPageLayout';
import NewLanding from '../components/landingv3';
import { Page } from '../components/PageTypes';
import React from 'react';
import { NextPage } from 'next';

// A basic layout that adds nothing to the page
export default function FullPageLayout(props: { children: React.ReactNode }) {
  return props.children;
}

const Root: NextPage = () => {
  return (<h1>hi</h1>);
};

Root.Layout = FullPageLayout;

export default Root;
