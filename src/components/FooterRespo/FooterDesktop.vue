<script setup>
import useFooter from "@/composables/useFooter"
import useHeader from "@/composables/useHeader"

const { headerInfo } = useHeader();
const { FooterInfo, contactFormData, submitContactForm } = useFooter();
</script>

<template/>
