"use client";

import Header from "@/components/common/Header/Header";
import FacilitySearch from "./FacilitySearch";
import { Container } from "@mui/material";
import React from "react";
import { useEditProfileStore } from "@/stores/editProfileStore";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { addIsEdit } = useEditProfileStore();

  return (
    <>
      <Header
        onClick={() => {
          addIsEdit(true);
          router.back();
        }}
      />
      <FacilitySearch />
    </>
  );
}
