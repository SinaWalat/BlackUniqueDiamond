(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/BlackUniqueDiamond/lib/employees.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmployeeProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BlackUniqueDiamond/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BlackUniqueDiamond/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BlackUniqueDiamond/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BlackUniqueDiamond/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BlackUniqueDiamond/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$lib$2f$employees$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BlackUniqueDiamond/lib/employees.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/BlackUniqueDiamond/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/BlackUniqueDiamond/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/BlackUniqueDiamond/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/BlackUniqueDiamond/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/BlackUniqueDiamond/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/BlackUniqueDiamond/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/BlackUniqueDiamond/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function EmployeeProfilePage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const id = params.id;
    const employee = __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$lib$2f$employees$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employees"][id];
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmployeeProfilePage.useEffect": ()=>{
            setMounted(true);
        }
    }["EmployeeProfilePage.useEffect"], []);
    if (!employee) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const handleShare = async ()=>{
        const url = window.location.href;
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${employee.name} Profile`,
                    url: url
                });
            } catch (err) {
                console.error('Share failed:', err);
            }
        } else {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        }
    };
    const links = [
        {
            label: "WhatsApp",
            subtitle: "Message directly",
            url: `https://wa.me/${employee.whatsapp || employee.phone.replace(/[\s\+]/g, '')}`,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
            color: "group-hover:text-green-400",
            bgAccent: "bg-green-500/10",
            borderAccent: "group-hover:border-green-500/30"
        },
        {
            label: "Call Now",
            subtitle: employee.phone,
            url: `tel:${employee.phone.replace(/\s/g, '')}`,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
            color: "group-hover:text-blue-400",
            bgAccent: "bg-blue-500/10",
            borderAccent: "group-hover:border-blue-500/30"
        },
        {
            label: "Email",
            subtitle: employee.email,
            url: `mailto:${employee.email}`,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
            color: "group-hover:text-orange-400",
            bgAccent: "bg-orange-500/10",
            borderAccent: "group-hover:border-orange-500/30"
        },
        {
            label: "Company Website",
            subtitle: "Black Unique Diamond",
            url: "https://blackuniquediamond.com",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
            color: "group-hover:text-amber-400",
            bgAccent: "bg-amber-500/10",
            borderAccent: "group-hover:border-amber-500/30"
        },
        {
            label: "Office Location",
            subtitle: employee.location,
            url: `https://maps.google.com/?q=${encodeURIComponent(employee.location)}`,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
            color: "group-hover:text-rose-400",
            bgAccent: "bg-rose-500/10",
            borderAccent: "group-hover:border-rose-500/30"
        }
    ];
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans relative overflow-x-hidden flex flex-col items-center py-12 px-4 sm:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 pointer-events-none z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-900/10 blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-amber-900/10 blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-[0.03]",
                        style: {
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'repeat'
                        }
                    }, void 0, false, {
                        fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-lg z-10 flex flex-col items-center animate-fade-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full relative bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/[0.05] rounded-3xl p-8 pb-10 mb-6 shadow-2xl flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleShare,
                                className: "absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/5 text-white/70 hover:text-white cursor-pointer",
                                "aria-label": "Share profile",
                                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    size: 18,
                                    className: "text-green-400"
                                }, void 0, false, {
                                    fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 23
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 72
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -inset-0.5 rounded-full bg-gradient-to-b from-orange-500 to-amber-600 opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-md"
                                    }, void 0, false, {
                                        fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -inset-[1px] rounded-full bg-gradient-to-b from-orange-500/50 to-amber-600/30 z-0"
                                    }, void 0, false, {
                                        fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#0A0A0A] z-10 bg-[#111]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: employee.image || "/ceo-profile.png",
                                            alt: employee.name,
                                            fill: true,
                                            className: "object-cover transition-transform duration-700",
                                            priority: true,
                                            sizes: "(max-width: 128px) 100vw, 128px",
                                            onError: (e)=>{
                                                e.target.src = "/ceo-profile.png";
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold tracking-tight text-white/95 leading-tight",
                                        children: employee.name
                                    }, void 0, false, {
                                        fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-300",
                                                children: employee.title
                                            }, void 0, false, {
                                                fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/40 text-sm font-light",
                                                children: "Black Unique Diamond"
                                            }, void 0, false, {
                                                fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full space-y-3",
                        children: links.map((link, idx)=>{
                            const Icon = link.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "group relative block",
                                style: {
                                    animationDelay: `${idx * 100}ms`,
                                    animationFillMode: 'both'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `
                  relative overflow-hidden
                  flex items-center p-4 rounded-2xl
                  bg-[#0A0A0A]/60 hover:bg-[#111111] backdrop-blur-md
                  border border-white/[0.03] ${link.borderAccent}
                  transition-all duration-300 ease-out
                  hover:shadow-xl
                `,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                            lineNumber: 198,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `
                    w-12 h-12 rounded-xl flex items-center justify-center
                    ${link.bgAccent} border border-white/5
                    transition-transform duration-300
                  `,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: `w-5 h-5 text-white/60 ${link.color} transition-colors duration-300`
                                            }, void 0, false, {
                                                fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-4 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-[15px] font-medium text-white/90 group-hover:text-white transition-colors",
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[13px] text-white/40 font-light mt-0.5",
                                                    children: link.subtitle
                                                }, void 0, false, {
                                                    fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full flex items-center justify-center bg-white/5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 text-white/50",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M9 5l7 7-7 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                            lineNumber: 220,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                    lineNumber: 189,
                                    columnNumber: 17
                                }, this)
                            }, link.label, false, {
                                fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "mt-12 text-center pb-8 animate-fade-in",
                        style: {
                            animationDelay: "800ms"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-[1px] bg-white/10 mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-medium tracking-[0.2em] text-white/30 uppercase",
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " Black Unique Diamond"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/BlackUniqueDiamond/app/profile/[id]/page.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(EmployeeProfilePage, "JQn7HlzEKJmF8xmM02IngrEV5O4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$BlackUniqueDiamond$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = EmployeeProfilePage;
var _c;
__turbopack_context__.k.register(_c, "EmployeeProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=BlackUniqueDiamond_c77d6756._.js.map