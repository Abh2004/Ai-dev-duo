import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TechCategory = "web" | "mobile" | "nextgen" | "cloud";

// SVG Icons as JSX elements to avoid import issues
const ReactIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    className="w-10 h-10"
  />
);

const AngularIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg"
    className="w-10 h-10"
  />
);

const VueIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
    className="w-10 h-10"
  />
);

const AndroidIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg"
    className="w-10 h-10"
  />
);

const SwiftIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg"
    className="w-10 h-10"
  />
);

const TensorflowIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
    className="w-10 h-10"
  />
);

const MongoDBIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
    className="w-10 h-10"
  />
);

const NodeJSIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
    className="w-10 h-10"
  />
);

const MySQLIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
    className="w-10 h-10"
  />
);

const FlutterIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
    className="w-10 h-10"
  />
);

const PythonIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    className="w-10 h-10"
  />
);

const RailsIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-original-wordmark.svg"
    className="w-10 h-10"
  />
);

const KotlinIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
    className="w-10 h-10"
  />
);

const LinuxIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
    className="w-10 h-10"
  />
);

const DjangoIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
    className="w-10 h-10"
  />
);

const HTML5Icon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    className="w-10 h-10"
  />
);

const ReactNavigationIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnavigation/reactnavigation-original.svg"
    className="w-10 h-10"
  />
);

// New NextGen tech icons
const ServerlessIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <path
      fill="#FF9900"
      d="M13.74 4.23c-.84-1.18-1.5-4.23-1.5-4.23s-.74 3.05-1.56 4.22c-.8 1.2-1.6 1.64-1.6 1.64s.8.48 1.64 1.67c.85 1.2 1.56 4.28 1.56 4.28s.75-3.01 1.58-4.22c.8-1.2 1.52-1.67 1.52-1.67s-.8-.48-1.63-1.69z"
    />
    <path
      fill="#FF9900"
      d="M5.23 6.23c1.18-.84 4.23-1.5 4.23-1.5s-3.05-.74-4.22-1.56C4.04 2.37 3.6 1.57 3.6 1.57s-.48.8-1.67 1.64C.73 4.06 0 4.93 0 4.93s3.01.75 4.22 1.58c1.2.8 1.67 1.52 1.67 1.52s.48-.8 1.69-1.63M9.06 15.9c-.85 1.2-1.56 4.22-1.56 4.22s3.05.74 4.23 1.58c1.17.83 1.6 1.63 1.6 1.63s.48-.81 1.65-1.65c1.18-.85 4.28-1.56 4.28-1.56s-3.01-.75-4.22-1.58c-1.2-.82-1.67-1.52-1.67-1.52s-.81.8-1.69 1.63z"
    />
    <path
      fill="#FF9900"
      d="M15.9 14.94c1.2.85 4.22 1.56 4.22 1.56s.74-3.05 1.58-4.22c.83-1.18 1.63-1.61 1.63-1.61s-.81-.48-1.65-1.65c-.85-1.18-1.56-4.28-1.56-4.28s-.75 3.01-1.58 4.22c-.82 1.2-1.52 1.67-1.52 1.67s.8.81 1.63 1.69z"
    />
  </svg>
);

const QuantumComputingIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <path
      fill="#512BD4"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
    />
    <circle cx="12" cy="12" r="5" fill="#512BD4" />
    <path fill="#512BD4" d="M12 8l2 4h-4z" />
    <path fill="#512BD4" d="M12 16l-2-4h4z" />
  </svg>
);

const AIGovernanceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <path
      fill="#FF4B4B"
      d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.67-3.13 8.42-7 9.67-3.87-1.25-7-5-7-9.67V6.3l7-3.12z"
    />
    <path
      fill="#FF4B4B"
      d="M12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4 8c0 2.21 1.79 4 4 4s4-1.79 4-4h-8z"
    />
  </svg>
);

const NeuralNetworkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <path
      fill="#68A063"
      d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM7.5 6C8.33 6 9 6.67 9 7.5C9 8.33 8.33 9 7.5 9C6.67 9 6 8.33 6 7.5C6 6.67 6.67 6 7.5 6ZM11 15H6V14C6 12.67 8.67 12 10 12C10.5 12 10.96 12.08 11.38 12.21C11.14 12.75 11 13.36 11 14V15ZM16.5 18C15.67 18 15 17.33 15 16.5C15 15.67 15.67 15 16.5 15C17.33 15 18 15.67 18 16.5C18 17.33 17.33 18 16.5 18ZM18 14H13V13C13 11.67 15.67 11 17 11C18.33 11 21 11.67 21 13V14H18Z"
    />
  </svg>
);

const SpatialComputingIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <path
      fill="#00D8FF"
      d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"
    />
  </svg>
);

const AdvancedCryptoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <path
      fill="#008080"
      d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
    />
  </svg>
);

// New tech icons
const FastAPIIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
    className="w-10 h-10"
  />
);

const NginxIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg"
    className="w-10 h-10"
  />
);

const CSSIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
    className="w-10 h-10"
  />
);

const JavaScriptIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    className="w-10 h-10"
  />
);

const LaravelIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
    className="w-10 h-10"
  />
);

const WordPressIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg"
    className="w-10 h-10"
  />
);

const PostgresIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
    className="w-10 h-10"
  />
);

const RedisIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
    className="w-10 h-10"
  />
);

const FirebaseIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg"
    className="w-10 h-10"
  />
);

const BlockchainIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <path
      fill="#3C3C3D"
      d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"
    />
  </svg>
);

const ChatbotIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <path
      fill="#6b7280"
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 19c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm3-8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-6 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9.691 3.44A7.03 7.03 0 0116 12a1 1 0 00-2 0 5 5 0 01-8 0 1 1 0 10-2 0c0 1.74.712 3.32 1.859 4.44a1.999 1.999 0 003.865.9 4.978 4.978 0 001.276.17 4.978 4.978 0 001.276-.17 1.999 1.999 0 003.865-.9z"
    />
  </svg>
);

const AutomationIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <path
      fill="#4285F4"
      d="M19.44 12.99l-.01.02c.04-.33.08-.67.08-1.01 0-.34-.03-.66-.07-.99l.01.02 2.44-1.92-2.43-4.22-2.87 1.16.01.01c-.52-.4-1.09-.74-1.71-1h.01L14.44 2H9.57l-.44 3.07h.01c-.6.25-1.17.59-1.69.98l.01-.01-2.88-1.17-2.44 4.22 2.44 1.92.01-.02c-.04.33-.08.67-.08 1.01 0 .34.03.68.08 1.01l-.01-.02-2.1 1.65-.33.26 2.43 4.2 2.88-1.15-.02-.04c.53.41 1.1.75 1.73 1.01h-.03L9.58 22h4.85s.03-.18.06-.42l.38-2.65h-.01c.62-.26 1.2-.6 1.73-1.01l-.02.04 2.88 1.15 2.43-4.2s-.14-.12-.33-.26l-2.11-1.66zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
    />
  </svg>
);

const N8NIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <path
      fill="#FF6D5A"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
    />
    <path fill="#FF6D5A" d="M9.5 8.5L6 12l3.5 3.5L13 12z" />
    <path fill="#FF6D5A" d="M14.5 8.5L11 12l3.5 3.5L18 12z" />
  </svg>
);

// Cloud and CI/CD icons
const AWSIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    className="w-10 h-10"
  />
);

const AzureIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
    className="w-10 h-10"
  />
);

const GoogleCloudIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg"
    className="w-10 h-10"
  />
);

const TerraformIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg"
    className="w-10 h-10"
  />
);

const CloudflareIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg"
    className="w-10 h-10"
  />
);

const DockerIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
    className="w-10 h-10"
  />
);

const KubernetesIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg"
    className="w-10 h-10"
  />
);

const GitHubActionsIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg"
    className="w-10 h-10"
  />
);

const GitHubIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
    className="w-10 h-10"
  />
);

const DigitalOceanIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg"
    className="w-10 h-10"
  />
);

const GitIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
    className="w-10 h-10"
  />
);

const JenkinsIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg"
    className="w-10 h-10"
  />
);

// const LaravelIcon = () => (
//   <img
//     src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-plain.svg"
//     className="w-10 h-10"
//   />
// );

// Add new mobile icons after existing icon components
const AndroidStudioIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg"
    className="w-10 h-10"
  />
);

const XcodeIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg"
    className="w-10 h-10"
  />
);

const IonicIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg"
    className="w-10 h-10"
  />
);

const JavaIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
    className="w-10 h-10"
  />
);

const ObjectiveCIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/objectivec/objectivec-plain.svg"
    className="w-10 h-10"
  />
);

// Custom AI icons
const OpenAIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <path
      fill="#10a37f"
      d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.5093-2.6067-1.4998z"
    />
  </svg>
);

const MLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <path
      fill="#FF6F00"
      d="M0 2v20h24v-20h-24zm22 18h-20v-16h20v16zm-4.695-7.304l-4.437-4.437c-0.122-0.121-0.296-0.172-0.464-0.133s-0.308 0.166-0.364 0.329l-1.256 3.604-3.428-3.427c-0.252-0.252-0.66-0.252-0.912 0s-0.252 0.66 0 0.912l3.796 3.796c0.124 0.125 0.302 0.176 0.472 0.135s0.306-0.176 0.356-0.345l1.237-3.539 4.046 4.045c0.252 0.252 0.66 0.252 0.912 0s0.252-0.659 0.042-0.94z"
    />
  </svg>
);

const AIAgentIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <path
      fill="#F59E0B"
      d="M14 16c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-7-4l2.2-6.6c.2-.7.9-1.2 1.7-1.2S13.5 4.7 13.8 5.4L16 12H7zm12 0l-2.2-6.6c-.5-1.5-1.9-2.5-3.5-2.5-1.6 0-3 1-3.5 2.5L7.6 12h10.8zM22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10zm-2 0c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z"
    />
    <text x="6" y="9" fontSize="5" fontWeight="bold" fill="#F59E0B">
      Δ
    </text>
    <text x="13" y="9" fontSize="4" fontWeight="bold" fill="#F59E0B">
      AI
    </text>
  </svg>
);

const MicrochipAIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <path
      fill="#10B981"
      d="M6 4H18V20H6V4M8 6V18H16V6H8M10 8H14V10H10V8M10 12H11V14H10V12M13 12H14V14H13V12M13 16H14V18H13V16M10 16H11V18H10V16Z"
    />
    <path
      fill="#10B981"
      d="M2 8H4V16H2V8M20 8H22V16H20V8M12 0V2H12V0M12 22V24H12V22M4 2L6 4L4 2L6 0M18 0L20 2L18 4M4 22L6 20L8 22M18 22L16 20L18 18"
    />
  </svg>
);

// Define tech stacks for each category
const techStacks: Record<
  TechCategory,
  Array<{ icon: React.ReactNode; name: string }>
> = {
  web: [
    { icon: <ReactIcon />, name: "React" },
    { icon: <AngularIcon />, name: "Angular" },
    { icon: <VueIcon />, name: "Vue.js" },
    { icon: <NodeJSIcon />, name: "Node.js" },
    { icon: <MongoDBIcon />, name: "MongoDB" },
    { icon: <MySQLIcon />, name: "MySQL" },
    // { icon: <RailsIcon />, name: "Ruby on Rails" },
    { icon: <FlutterIcon />, name: "Flutter" },
    { icon: <PythonIcon />, name: "Python" },
    { icon: <DjangoIcon />, name: "Django" },
    { icon: <LinuxIcon />, name: "Linux" },
    { icon: <HTML5Icon />, name: "HTML5" },
    { icon: <FastAPIIcon />, name: "FastAPI" },
    { icon: <NginxIcon />, name: "Nginx" },
    { icon: <CSSIcon />, name: "CSS" },
    { icon: <JavaScriptIcon />, name: "JavaScript" },
    { icon: <LaravelIcon />, name: "Laravel" },
    { icon: <WordPressIcon />, name: "WordPress" },
    { icon: <PostgresIcon />, name: "PostgreSQL" },
    { icon: <RedisIcon />, name: "Redis" },
    { icon: <FirebaseIcon />, name: "Firebase" },
  ],
  mobile: [
    { icon: <AndroidIcon />, name: "Android" },
    { icon: <SwiftIcon />, name: "Swift" },
    { icon: <FlutterIcon />, name: "Flutter" },
    { icon: <ReactNavigationIcon />, name: "React Native" },
    { icon: <KotlinIcon />, name: "Kotlin" },
    { icon: <AndroidStudioIcon />, name: "Android Studio" },
    { icon: <XcodeIcon />, name: "Xcode" },
    { icon: <IonicIcon />, name: "Ionic" },
    { icon: <JavaIcon />, name: "Java" },
    { icon: <ObjectiveCIcon />, name: "Objective-C" },
  ],
  nextgen: [
    { icon: <TensorflowIcon />, name: "TensorFlow" },
    { icon: <NodeJSIcon />, name: "Node.js" },
    { icon: <ServerlessIcon />, name: "Serverless" },
    { icon: <FlutterIcon />, name: "Flutter" },
    // { icon: <QuantumComputingIcon />, name: "Quantum Computing" },
    // { icon: <AIGovernanceIcon />, name: "AI Governance" },
    { icon: <NeuralNetworkIcon />, name: "Neural Networks" },
    // { icon: <SpatialComputingIcon />, name: "Spatial Computing" },
    // { icon: <AdvancedCryptoIcon />, name: "Post-Quantum Crypto" },
    { icon: <BlockchainIcon />, name: "Blockchain" },
    { icon: <ChatbotIcon />, name: "Chatbots" },
    { icon: <AutomationIcon />, name: "Automation" },
    { icon: <N8NIcon />, name: "n8n" },
    { icon: <MLIcon />, name: "Machine Learning" },
    { icon: <OpenAIIcon />, name: "AI" },
    { icon: <MicrochipAIIcon />, name: "Artificial Intelligence" },
    { icon: <AIAgentIcon />, name: "AI Agents" },
  ],
  cloud: [
    { icon: <AWSIcon />, name: "AWS" },
    { icon: <AzureIcon />, name: "Azure" },
    { icon: <GoogleCloudIcon />, name: "Google Cloud" },
    { icon: <TerraformIcon />, name: "Terraform" },
    { icon: <CloudflareIcon />, name: "Cloudflare" },
    { icon: <DockerIcon />, name: "Docker" },
    { icon: <KubernetesIcon />, name: "Kubernetes" },
    { icon: <GitHubActionsIcon />, name: "GitHub Actions" },
    { icon: <GitHubIcon />, name: "GitHub" },
    { icon: <DigitalOceanIcon />, name: "DigitalOcean" },
    { icon: <GitIcon />, name: "Git" },
    { icon: <JenkinsIcon />, name: "Jenkins" },
  ],
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>("web");

  // Tabs for the tech categories
  const categories = [
    { id: "web" as TechCategory, label: "Web" },
    { id: "mobile" as TechCategory, label: "Mobile Apps" },
    { id: "cloud" as TechCategory, label: "Cloud & CI/CD" },
    { id: "nextgen" as TechCategory, label: "Next Gen Tech" },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our Fully Loaded Technology Stack
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#121212] rounded-md p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                className={cn(
                  "px-6 py-3 text-sm font-medium relative",
                  activeCategory === category.id
                    ? "text-[#0066FF]"
                    : "text-white hover:text-gray-300"
                )}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
                {activeCategory === category.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0066FF]"
                    layoutId="underline"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Icons Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {techStacks[activeCategory].map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.05, 1) }}
            >
              <div className="mb-3">{tech.icon}</div>
              <p className="text-sm text-gray-300 text-center">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
