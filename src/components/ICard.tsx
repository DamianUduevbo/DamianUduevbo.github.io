import React from 'react'

export interface ICardProps {
    name: string;
    date?: string;
    techStack: string[];
}

export interface IExperienceProps extends ICardProps {
    position: string;
    description: string[];
}

export interface IProjectProps extends ICardProps {
    children: React.ReactNode;
    githubLink?: string;
}
