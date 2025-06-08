"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Star, MapPin, Clock, DollarSign } from "lucide-react";
import Image from 'next/image';

interface Gig3DCardProps {
  title: string;
  description: string;
  image: string;
  company?: string;
  tags?: string[];
  location?: string;
  salary?: string;
  posted?: string;
  rating?: number;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
}

export function Gig3DCard({
  title,
  description,
  image,
  company,
  tags = [],
  location,
  salary,
  posted,
  rating,
  onPrimaryAction,
  onSecondaryAction,
  primaryActionLabel = "Apply Now",
  secondaryActionLabel = "Details",
}: Gig3DCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#18181b] border border-[#232329] relative group/card dark:hover:shadow-2xl dark:hover:shadow-indigo-500/10 w-auto sm:w-[30rem] h-auto rounded-2xl p-6 transition-all">
        <div className="flex justify-between items-start mb-2">
          <div>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white mb-1"
            >
              {title}
            </CardItem>
            {company && (
              <CardItem
                as="span"
                translateZ="30"
                className="text-sm text-[#a1a1aa]"
              >
                {company}
              </CardItem>
            )}
          </div>
          {typeof rating === 'number' && (
            <div className="flex items-center text-indigo-400">
              <Star className="w-4 h-4 fill-current mr-1" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          )}
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3 mt-1">
            {tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 py-1 text-xs bg-[#232329] rounded-full text-[#a1a1aa] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-2"
        >
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
        </CardItem>
        <div className="flex items-center gap-4 text-xs text-[#a1a1aa] mt-4 mb-2">
          {location && (
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
          )}
          {posted && (
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {posted}
            </div>
          )}
          {salary && (
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-1" />
              {salary}
            </div>
          )}
        </div>
        <CardItem
          as="p"
          translateZ="60"
          className="text-[#d4d4d8] text-sm mt-2 mb-4 min-h-[48px]"
        >
          {description}
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white border border-[#232329] hover:bg-[#232329] transition-colors"
            onClick={onSecondaryAction}
          >
            {secondaryActionLabel}
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-bold shadow-md transition-colors"
            onClick={onPrimaryAction}
          >
            {primaryActionLabel}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
} 