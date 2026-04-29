module.exports = [
"[project]/BlackUniqueDiamond/lib/employees.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "employees",
    ()=>employees
]);
const employees = {
    HamedMansouri: {
        id: "HamedMansouri",
        name: "Hamed Mansouri",
        title: "Chief Executive Officer",
        phone: "+964 750 455 0060",
        whatsapp: "+9647504550060",
        email: "HamedMansouri@Blackuniquediamond.com",
        location: "No.48, Vital Village, Erbil, Iraq",
        image: "/ceo-profile.png"
    },
    DaraRashid: {
        id: "DaraRashid",
        name: "Dara Rashid Mohammed",
        title: "Authorized Director",
        phone: "+964 750 445 9054",
        whatsapp: "+9647504459054",
        email: "DaraRashid@Blackuniquediamond.com",
        location: "No.48, Vital Village, Erbil, Iraq",
        image: "/dara-profile.png"
    },
    MahmoudYoussef: {
        id: "MahmoudYoussef",
        name: "Mahmoud Youssef Mahmoud",
        title: "Deputy CEO",
        phone: "+964 750 450 9292",
        whatsapp: "+9647504509292",
        email: "MahmoudYoussef@Blackuniquediamond.com",
        location: "No.48, Vital Village, Erbil, Iraq",
        image: "/mahmoud-y-profile.png"
    },
    MahmoudAyoubizadeh: {
        id: "MahmoudAyoubizadeh",
        name: "Mahmoud Ayoubizadeh",
        title: "Deputy CEO",
        phone: "+964 750 653 3932",
        whatsapp: "+9647506533932",
        email: "MahmoudAyoubizadeh@Blackuniquediamond.com",
        location: "No.48, Vital Village, Erbil, Iraq",
        image: "/mahmoud-a-profile.png"
    },
    NazarMuhammad: {
        id: "NazarMuhammad",
        name: "Nazar M. Saleem Ahmed",
        title: "Executive Manager",
        phone: "+964 750 459 2199",
        whatsapp: "+9647504592199",
        email: "NazarMuhammad@Blackuniquediamond.com",
        location: "No.48, Vital Village, Erbil, Iraq",
        image: "/nazar-profile.png"
    },
    KimiaAbolhassani: {
        id: "KimiaAbolhassani",
        name: "Kimia Abolhassani",
        title: "Executive Assistant to the CEO & International Sales Executive",
        phone: "+964 750 150 7702",
        whatsapp: "+9647501507702",
        email: "KimiaAbdolhassani@Blackuniquediamond.com",
        location: "No.48, Vital Village, Erbil, Iraq",
        image: "/kimia-profile.png"
    }
};
}),
"[project]/BlackUniqueDiamond/app/profile/[id]/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileLayout,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BlackUniqueDiamond/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$lib$2f$employees$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BlackUniqueDiamond/lib/employees.ts [app-rsc] (ecmascript)");
;
;
async function generateMetadata({ params }) {
    const employee = __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$lib$2f$employees$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["employees"][params.id];
    if (!employee) {
        return {
            title: "Profile Not Found"
        };
    }
    return {
        title: `${employee.name} | Black Unique Diamond`,
        description: `Connect with ${employee.name}, ${employee.title} at Black Unique Diamond.`,
        openGraph: {
            title: `${employee.name} | Profile`,
            description: `Connect with ${employee.name}, ${employee.title} at Black Unique Diamond.`,
            images: [
                employee.image
            ]
        }
    };
}
function ProfileLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
];

//# sourceMappingURL=BlackUniqueDiamond_dc617bdc._.js.map