import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://training-platform-bay.vercel.app";
  const basestudentUrl = "https://training-platform-bay.vercel.app/student";

  return [
    {
      url: baseUrl,
      priority: 1,
    },

    {
      url: `${basestudentUrl}`,
      priority: 0.9,
    },

    {
      url: `${basestudentUrl}/roadmaps`,
      priority: 0.8,
    },

    {
      url: `${basestudentUrl}/courses`,
      priority: 0.7,
    },

    {
      url: `${basestudentUrl}/blogs`,
      priority: 0.6,
    },

    {
      url: `${basestudentUrl}/categories`,
      priority: 0.6,
    }
    , {
      url: `${basestudentUrl}/contact`,
      priority: 0.5,
    }
     , {
      url: `${basestudentUrl}/report`,
      priority: 0.5,
    }
     , {
      url: `${basestudentUrl}/instructors`,
      priority: 0.5,
    }
     , {
      url: `${basestudentUrl}/organizations`,
      priority: 0.5,
    }
     , {
      url: `${basestudentUrl}/cart`,
      priority: 0.5,
    }
     , {
      url: `${basestudentUrl}/cart/checkout`,
      priority: 0.5,
    }

  ];
}