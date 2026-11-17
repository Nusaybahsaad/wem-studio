"use client";

//import React, { useState, useEffect } from "react";
import { levelsData } from "@/data/levelsData";

/*interface UserRecord {
  name: string;
  code: string;
  approved: boolean;
}*/

interface VocabRow {
  word: string;
  meaning: string;
}

export default function WemStudioApp() {
  // Auth & Admin states
/*  const [mounted, setMounted] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [usersDB, setUsersDB] = useState<UserRecord[]>([]);
  const [isPending, setIsPending] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  // Inputs for Auth
  const [userNameInput, setUserNameInput] = useState("");
  const [accessCodeInput, setAccessCodeInput] = useState("");
  const [adminPassInput, setAdminPassInput] = useState("");
*/
  // Navigation & Active Levels
  const [activeTab, setActiveTab] = useState<"journal" | "roadmap" | "test" | "calculator" | "starters" | "community">("journal");
  const [selectedLevel, setSelectedLevel] = useState<"A1" | "A2" | "B1" | "B2">("A1");
  const [roadmapLevel, setRoadmapLevel] = useState<"A1" | "A2" | "B1" | "B2">("A1");

  // Journal States
  const [readTitle, setReadTitle] = useState("");
  const [readVocab, setReadVocab] = useState<VocabRow[]>([
    { word: "", meaning: "" },
    { word: "", meaning: "" },
    { word: "", meaning: "" },
  ]);
  const [readSummary, setReadSummary] = useState("");

  const [listenSource, setListenSource] = useState("");
  const [listenDuration, setListenDuration] = useState("");
  const [listenVocab, setListenVocab] = useState<VocabRow[]>([
    { word: "", meaning: "" },
    { word: "", meaning: "" },
    { word: "", meaning: "" },
  ]);
  const [listenSummary, setListenSummary] = useState("");

  const [selectedTopic, setSelectedTopic] = useState(levelsData.A1.topics[0]);
  const [targetWords, setTargetWords] = useState("");
  const [journalText, setJournalText] = useState("");
  const [aiFeedback, setAiFeedback] = useState("اكتب نصك ثم اضغط للفحص...");
  const [isRecording, setIsRecording] = useState(false);
  const [recordStatus, setRecordStatus] = useState("اقرأ ما كتبته بصوت واضح لتعزيز الطلاقة");

  // Level Test & Calculator States
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [testResult, setTestResult] = useState("");
  const [calcLevel, setCalcLevel] = useState("A1");
  const [calcHours, setCalcHours] = useState("1");
  const [calcResult, setCalcResult] = useState("");

/*  useEffect(() => {
    setMounted(true);
    const savedUser = localStorage.getItem("wem_user");
    const savedAdmin = localStorage.getItem("wem_is_admin") === "true";
    const savedDB: UserRecord[] = JSON.parse(localStorage.getItem("wem_users_db") || "[]");
    setUsersDB(savedDB);

    if (savedAdmin) {
      setIsAdmin(true);
      setCurrentUser("وئام (المشرفة)");
    } else if (savedUser) {
      const userObj = savedDB.find((u) => u.name === savedUser);
      if (userObj && userObj.approved) {
        setCurrentUser(savedUser);
      } else {
        setIsPending(true);
      }
    }
  }, []);

  if (!mounted) return null;*/

  const handleLevelChange = (lvl: "A1" | "A2" | "B1" | "B2") => {
    setSelectedLevel(lvl);
    setSelectedTopic(levelsData[lvl].topics[0]);
  };

/*  const handleSubmitRequest = () => {
    const name = userNameInput.trim();
    const code = accessCodeInput.trim();
    if (!name || !code) {
      alert("الرجاء إدخال الاسم والكود");
      return;
    }
    const existing = usersDB.find((u) => u.name === name);
    let updatedDB = [...usersDB];
    if (!existing) {
      updatedDB.push({ name, code, approved: false });
      setUsersDB(updatedDB);
      localStorage.setItem("wem_users_db", JSON.stringify(updatedDB));
    }
    localStorage.setItem("wem_user", name);
    setIsPending(true);
  };

  const handleCheckStatus = () => {
    const savedUser = localStorage.getItem("wem_user");
    const freshDB: UserRecord[] = JSON.parse(localStorage.getItem("wem_users_db") || "[]");
    setUsersDB(freshDB);
    const userObj = freshDB.find((u) => u.name === savedUser);
    if (userObj && userObj.approved && savedUser) {
      setCurrentUser(savedUser);
      setIsPending(false);
    } else {
      alert("لم يتم قبول الطلب بعد من قبل المشرف.");
    }
  };

  const handleVerifyAdmin = () => {
    if (adminPassInput === "wem2026") {
      localStorage.setItem("wem_is_admin", "true");
      setShowAdminPanel(true);
    } else {
      alert("كلمة المرور غير صحيحة");
    }
  };

  const handleEnterAsAdmin = () => {
    localStorage.setItem("wem_is_admin", "true");
    setIsAdmin(true);
    setCurrentUser("وئام (المشرفة)");
    setShowAdminPanel(false);
  };

  const handleApproveUser = (index: number) => {
    const updatedDB = [...usersDB];
    updatedDB[index].approved = true;
    setUsersDB(updatedDB);
    localStorage.setItem("wem_users_db", JSON.stringify(updatedDB));
  };

  const handleLogout = () => {
    localStorage.removeItem("wem_user");
    localStorage.removeItem("wem_is_admin");
    setCurrentUser(null);
    setIsAdmin(false);
    setIsPending(false);
  };
*/
  const updateVocab = (
    list: VocabRow[],
    setter: React.Dispatch<React.SetStateAction<VocabRow[]>>,
    index: number,
    field: "word" | "meaning",
    val: string
  ) => {
    const copy = [...list];
    copy[index][field] = val;
    setter(copy);
  };

  const handleAiCorrect = () => {
    if (!journalText.trim()) {
      setAiFeedback("اكتب نصاً أولاً!");
      return;
    }
    const wordCount = journalText.trim().split(/\s+/).length;
    setAiFeedback(`✨ تم الفحص: عدد الكلمات (${wordCount} كلمة). صياغتك واضحة ومترابطة، استمر في توظيف الكلمات الجديدة!`);
  };

  const handleToggleRecord = () => {
    const nextState = !isRecording;
    setIsRecording(nextState);
    setRecordStatus(
      nextState ? "جاري الاستماع لصوتك... تحدث بطلاقة" : "تم حفظ التدريب الصوتي بنجاح ✅"
    );
  };

  const handleCalculateLevel = () => {
    if (!q1 || !q2) {
      alert("الرجاء الإجابة على جميع الأسئلة");
      return;
    }
    const score = parseInt(q1) + parseInt(q2);
    if (score === 4) setTestResult("مستواك المقترح: B1 / B2 (ممتاز! ابدأ من خطة المتوسط)");
    else if (score === 3) setTestResult("مستواك المقترح: A2 (جيد جداً! ابدأ من خطة ما قبل المتوسط)");
    else setTestResult("مستواك المقترح: A1 (بداية رائعة! ابدأ من خطة المبتدئ)");
  };

  const handleRunCalculator = () => {
    const timeText =
      calcLevel === "A1" && calcHours === "1"
        ? "3 إلى 4 أشهر تقريباً"
        : calcHours === "6"
        ? "15 إلى 18 يوماً (مكثف)"
        : "شهرين إلى 3 أشهر";
    setCalcResult(
      `النتيجة لمستوى ${calcLevel} بـ ${calcHours} ساعة يومياً: المدة المتوقعة لإنهاء المستوى هي ${timeText}. توزيع المهارات اليومي: قراءة، استماع، كتابة، وتحدث حسب خطة الأجندة الرسمية.`
    );
  };

  const startTopicFromRoadmap = (lvl: "A1" | "A2" | "B1" | "B2", topic: string) => {
    setSelectedLevel(lvl);
    setSelectedTopic(topic);
    setActiveTab("journal");
  };

  return (
    <div className="min-h-screen flex flex-col">
     {/* بوابة الدخول والتسجيل */}
      {!currentUser && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 border border-gray-100">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-extrabold text-[#1E3A8A] mb-2">Wem Studio</h1>
              <p className="text-sm text-gray-500">نظام تعلم اللغة الإنجليزية ومساحة التدوين اليومية</p>
            </div>

            {!isPending ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الكريم</label>
                  <input
                    type="text"
                    value={userNameInput}
                    onChange={(e) => setUserNameInput(e.target.value)}
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none text-sm"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">كود الدعوة / رقم الطلب</label>
                  <input
                    type="password"
                    value={accessCodeInput}
                    onChange={(e) => setAccessCodeInput(e.target.value)}
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none text-sm"
                    placeholder="أدخل كود الدعوة الخاص بك"
                  />
                </div>
                <button
                  onClick={handleSubmitRequest}
                  className="w-full bg-[#1E3A8A] text-white py-3 rounded-xl font-semibold hover:bg-blue-900 transition shadow-lg"
                >
                  إرسال طلب الانضمام
                </button>
                <div className="text-left mt-2 flex justify-between items-center">
                  <span className="text-xs text-gray-400">يتطلب موافقة المشرف</span>
                  <button
                    onClick={() => setShowAdminLogin(!showAdminLogin)}
                    className="text-xs text-[#1E3A8A] font-bold underline"
                  >
                    لوحة المشرف (Admin)
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                  ⏳
                </div>
                <h3 className="font-bold text-lg text-gray-800">طلبك قيد المراجعة</h3>
                <p className="text-sm text-gray-500 mt-2">
                  تم تسجيل طلبك بنجاح. سيتم السماح لك بالدخول فور موافقة الإدارة.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <button
                    onClick={handleCheckStatus}
                    className="text-sm text-[#1E3A8A] underline font-medium"
                  >
                    التحقق من حالة القبول
                  </button>
                  <button
                    onClick={() => {
                      localStorage.removeItem("wem_user");
                      setIsPending(false);
                    }}
                    className="text-xs text-gray-400 underline"
                  >
                    العودة لشاشة الدخول
                  </button>
                </div>
              </div>
            )}

            {showAdminLogin && (
              <div className="space-y-4 mt-4 pt-4 border-t">
                <h4 className="font-bold text-sm text-gray-700">تسجيل دخول المشرف</h4>
                <input
                  type="password"
                  value={adminPassInput}
                  onChange={(e) => setAdminPassInput(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-gray-800"
                  placeholder="أدخل كلمة المرور"
                />
                <button
                  onClick={handleVerifyAdmin}
                  className="w-full bg-gray-800 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-900 transition"
                >
                  دخول لوحة التحكم
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* لوحة تحكم المشرف */}
      {showAdminPanel && (
        <div className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-between items-center gap-3 mb-6 pb-4 border-b">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">لوحة تحكم المشرف - Wem Studio</h2>
                <p className="text-sm text-gray-500">
                  إدارة طلبات الانضمام (المشتركين المقبولين:{" "}
                  <span>{usersDB.filter((u) => u.approved).length}</span>)
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleEnterAsAdmin}
                  className="bg-[#1E3A8A] text-white px-4 py-2 rounded-xl text-sm font-bold shadow hover:bg-blue-900 transition"
                >
                  دخول للموقع كمشرفة ✨
                </button>
                <button
                  onClick={() => setShowAdminPanel(false)}
                  className="bg-gray-200 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-300 transition"
                >
                  إغلاق اللوحة
                </button>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4 border">
              <h3 className="font-bold text-gray-700 mb-3">الطلبات المسجلة:</h3>
              <div className="space-y-3">
                {usersDB.length === 0 ? (
                  <p className="text-xs text-gray-400">لا توجد طلبات مسجلة حالياً.</p>
                ) : (
                  usersDB.map((u, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center bg-white p-3 rounded-xl border"
                    >
                      <div>
                        <span className="font-bold text-sm">{u.name}</span>
                        <span className="text-xs text-gray-500 mr-2">كود: {u.code}</span>
                        <span
                          className={`text-xs ${
                            u.approved ? "text-green-600" : "text-amber-600"
                          } font-bold mr-2`}
                        >
                          ({u.approved ? "مقبول" : "معلق"})
                        </span>
                      </div>
                      {!u.approved && (
                        <button
                          onClick={() => handleApproveUser(i)}
                          className="bg-green-600 text-white text-xs px-3 py-1.5 rounded-lg font-bold"
                        >
                          قبول
                        </button>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* المحتوى الرئيسي للموقع */}
      {currentUser && (
        <div className="flex-1 flex flex-col">
          <header className="bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm">
            <div className="flex items-center space-x-3 space-x-reverse">
              <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
              <span className="font-extrabold text-lg text-[#1E3A8A]">
                The Language Practice Journal
              </span>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse text-sm font-medium text-gray-600">
              <span>
                مرحباً، <strong className="text-[#1E3A8A]">{currentUser}</strong>
              </span>
              {isAdmin && (
                <button
                  onClick={() => setShowAdminPanel(true)}
                  className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-xs font-bold"
                >
                  لوحة المشرف
                </button>
              )}
              <button onClick={handleLogout} className="text-red-500 text-xs underline">
                خروج
              </button>
            </div>
          </header>

          <main className="flex-1 max-w-5xl w-full mx-auto p-6 space-y-6">
            {/* شريط التنقل */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2 text-xs">
              {[
                { id: "journal", label: "📖 التدوين اليومي" },
                { id: "roadmap", label: "🗺️ خطط المستويات" },
                { id: "test", label: "🎯 تحديد المستوى" },
                { id: "calculator", label: "⏱️ حاسبة الوقت" },
                { id: "starters", label: "💬 قوالب التحدث" },
                { id: "community", label: "👥 مجتمع ويم" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`p-3 rounded-xl font-bold transition text-center ${
                    activeTab === tab.id
                      ? "bg-[#1E3A8A] text-white shadow"
                      : "bg-white text-gray-700 border hover:bg-gray-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* 1. تبويب التدوين اليومي */}
            {activeTab === "journal" && (
              <div className="space-y-6">
                {/* قسم القراءة */}
                <div className="bg-white rounded-2xl p-6 border shadow-sm space-y-4">
                  <div className="flex justify-between items-center border-b pb-3">
                    <h3 className="font-extrabold text-lg text-[#1E3A8A]" dir="ltr">
                      Reading (القراءة)
                    </h3>
                    <span className="text-xs bg-blue-50 text-[#1E3A8A] px-3 py-1 rounded-full font-bold">
                      تدوين المفردات والملخص
                    </span>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1" dir="ltr">
                      Text / Title (عنوان النص أو الكتاب):
                    </label>
                    <input
                      type="text"
                      value={readTitle}
                      onChange={(e) => setReadTitle(e.target.value)}
                      className="w-full px-4 py-2.5 border rounded-xl text-sm bg-gray-50 outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                      placeholder="اكتب عنوان المقال أو القصة..."
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-gray-600" dir="ltr">
                        New words (الكلمات الجديدة):
                      </label>
                      <button
                        onClick={() => setReadVocab([...readVocab, { word: "", meaning: "" }])}
                        className="text-xs bg-blue-50 text-[#1E3A8A] px-3 py-1 rounded-lg font-bold hover:bg-blue-100"
                      >
                        + إضافة كلمة
                      </button>
                    </div>
                    <div className="overflow-x-auto border rounded-xl">
                      <table className="w-full text-sm text-center" dir="ltr">
                        <thead>
                          <tr className="bg-[#1E3A8A] text-white text-xs">
                            <th className="py-2.5 px-3 w-1/2 border-r border-blue-800">Vocabulary</th>
                            <th className="py-2.5 px-3 w-1/2">Meaning</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {readVocab.map((row, idx) => (
                            <tr key={idx}>
                              <td className="p-1.5 border-r">
                                <input
                                  type="text"
                                  value={row.word}
                                  onChange={(e) =>
                                    updateVocab(readVocab, setReadVocab, idx, "word", e.target.value)
                                  }
                                  className="w-full px-2 py-1 text-xs outline-none"
                                  placeholder="Word..."
                                />
                              </td>
                              <td className="p-1.5">
                                <input
                                  type="text"
                                  value={row.meaning}
                                  onChange={(e) =>
                                    updateVocab(readVocab, setReadVocab, idx, "meaning", e.target.value)
                                  }
                                  className="w-full px-2 py-1 text-xs outline-none text-right"
                                  dir="rtl"
                                  placeholder="المعنى..."
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1" dir="ltr">
                      Short summary (ملخص قصير لما قرأت):
                    </label>
                    <textarea
                      rows={3}
                      value={readSummary}
                      onChange={(e) => setReadSummary(e.target.value)}
                      className="w-full px-4 py-2.5 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                      placeholder="اكتب ملخصاً بسيطاً بأسلوبك..."
                    />
                  </div>
                </div>

                {/* قسم الاستماع */}
                <div className="bg-white rounded-2xl p-6 border shadow-sm space-y-4">
                  <div className="flex justify-between items-center border-b pb-3">
                    <h3 className="font-extrabold text-lg text-[#4D5D42]" dir="ltr">
                      Listening (الاستماع)
                    </h3>
                    <span className="text-xs bg-green-50 text-[#4D5D42] px-3 py-1 rounded-full font-bold">
                      تدوين المسموع والمفردات
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1" dir="ltr">
                        Source (video / podcast):
                      </label>
                      <input
                        type="text"
                        value={listenSource}
                        onChange={(e) => setListenSource(e.target.value)}
                        className="w-full px-4 py-2.5 border rounded-xl text-sm bg-gray-50 outline-none focus:ring-2 focus:ring-[#4D5D42]"
                        placeholder="اسم البودكاست أو القناة..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1" dir="ltr">
                        Duration (مدة الاستماع):
                      </label>
                      <input
                        type="text"
                        value={listenDuration}
                        onChange={(e) => setListenDuration(e.target.value)}
                        className="w-full px-4 py-2.5 border rounded-xl text-sm bg-gray-50 outline-none focus:ring-2 focus:ring-[#4D5D42]"
                        placeholder="مثال: 15 دقيقة"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-gray-600" dir="ltr">
                        New words (الكلمات الجديدة):
                      </label>
                      <button
                        onClick={() => setListenVocab([...listenVocab, { word: "", meaning: "" }])}
                        className="text-xs bg-green-50 text-[#4D5D42] px-3 py-1 rounded-lg font-bold hover:bg-green-100"
                      >
                        + إضافة كلمة
                      </button>
                    </div>
                    <div className="overflow-x-auto border rounded-xl">
                      <table className="w-full text-sm text-center" dir="ltr">
                        <thead>
                          <tr className="bg-[#4D5D42] text-white text-xs">
                            <th className="py-2.5 px-3 w-1/2 border-r border-green-800">Vocabulary</th>
                            <th className="py-2.5 px-3 w-1/2">Meaning</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {listenVocab.map((row, idx) => (
                            <tr key={idx}>
                              <td className="p-1.5 border-r">
                                <input
                                  type="text"
                                  value={row.word}
                                  onChange={(e) =>
                                    updateVocab(listenVocab, setListenVocab, idx, "word", e.target.value)
                                  }
                                  className="w-full px-2 py-1 text-xs outline-none"
                                  placeholder="Word..."
                                />
                              </td>
                              <td className="p-1.5">
                                <input
                                  type="text"
                                  value={row.meaning}
                                  onChange={(e) =>
                                    updateVocab(
                                      listenVocab,
                                      setListenVocab,
                                      idx,
                                      "meaning",
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-2 py-1 text-xs outline-none text-right"
                                  dir="rtl"
                                  placeholder="المعنى..."
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1" dir="ltr">
                      Short summary (ملخص قصير لما سمعت):
                    </label>
                    <textarea
                      rows={3}
                      value={listenSummary}
                      onChange={(e) => setListenSummary(e.target.value)}
                      className="w-full px-4 py-2.5 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#4D5D42]"
                      placeholder="اكتب أبرز الأفكار التي فهمتها..."
                    />
                  </div>
                </div>

                {/* قسم الكتابة والتحدث */}
                <div className="bg-white rounded-2xl p-6 border shadow-sm space-y-4">
                  <div className="flex justify-between items-center border-b pb-3">
                    <h3 className="font-extrabold text-lg text-[#D97706]" dir="ltr">
                      Writing and Speaking (كتابة وتحدث)
                    </h3>
                    <span className="text-xs bg-amber-50 text-[#D97706] px-3 py-1 rounded-full font-bold">
                      التطبيق العملي
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">اختر المستوى:</label>
                      <select
                        value={selectedLevel}
                        onChange={(e) => handleLevelChange(e.target.value as any)}
                        className="w-full px-3 py-2.5 border rounded-xl bg-gray-50 font-bold text-sm text-[#1E3A8A] outline-none"
                      >
                        <option value="A1">مستوى A1 (مبتدئ)</option>
                        <option value="A2">مستوى A2 (ما قبل المتوسط)</option>
                        <option value="B1">مستوى B1 (متوسط)</option>
                        <option value="B2">مستوى B2 (فوق المتوسط)</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-gray-700 mb-1" dir="ltr">
                        Subject / Title (اختر موضوع الكتابة والتحدث):
                      </label>
                      <select
                        value={selectedTopic}
                        onChange={(e) => setSelectedTopic(e.target.value)}
                        className="w-full px-3 py-2.5 border rounded-xl bg-gray-50 font-medium text-sm text-gray-800 outline-none"
                        dir="ltr"
                      >
                        {levelsData[selectedLevel].topics.map((t, i) => (
                          <option key={i} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1" dir="ltr">
                      The new words I want to use (الكلمات الجديدة التي أرغب بتوظيفها):
                    </label>
                    <input
                      type="text"
                      value={targetWords}
                      onChange={(e) => setTargetWords(e.target.value)}
                      className="w-full px-4 py-2.5 border rounded-xl text-sm bg-amber-50/40 outline-none focus:ring-2 focus:ring-[#D97706]"
                      placeholder="اكتب 3 إلى 5 كلمات جديدة لتستخدمها في نصك..."
                    />
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <h4 className="font-bold text-amber-800 text-xs mb-2">
                      💡 بدايات وتراكيب مساعدة للتعبير:
                    </h4>
                    <div className="flex flex-wrap gap-2 text-xs" dir="ltr">
                      {[
                        "I am...",
                        "I like...",
                        "In my opinion...",
                        "Usually, I...",
                        "On the other hand...",
                      ].map((starter) => (
                        <span
                          key={starter}
                          onClick={() =>
                            setJournalText((prev) => `${prev}${prev ? " " : ""}${starter} `)
                          }
                          className="bg-white border border-amber-300 px-3 py-1 rounded-lg cursor-pointer font-medium shadow-sm hover:bg-amber-100"
                        >
                          {starter}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1" dir="ltr">
                      Text (free writing or answering a question):
                    </label>
                    <textarea
                      rows={5}
                      value={journalText}
                      onChange={(e) => setJournalText(e.target.value)}
                      className="w-full px-4 py-3 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                      placeholder="Write your paragraph here..."
                      dir="ltr"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-xs text-blue-900">مراجعة وتقييم النص</span>
                        <button
                          onClick={handleAiCorrect}
                          className="bg-[#1E3A8A] text-white text-xs px-3 py-1 rounded-lg"
                        >
                          فحص النص
                        </button>
                      </div>
                      <div className="text-xs text-blue-800 min-h-[50px] bg-white/70 p-2.5 rounded-lg">
                        {aiFeedback}
                      </div>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex flex-col justify-between">
                      <div>
                        <span className="font-bold text-xs text-green-900 block mb-2">
                          التدرب على التحدث بصوت مسموع
                        </span>
                        <button
                          onClick={handleToggleRecord}
                          className={`w-full text-white text-xs py-2.5 rounded-lg font-semibold ${
                            isRecording ? "bg-red-600 animate-pulse" : "bg-emerald-600"
                          }`}
                        >
                          {isRecording ? "⏹️ إيقاف التسجيل" : "🎤 بدء تسجيل التحدث"}
                        </button>
                      </div>
                      <p className="text-[11px] text-green-700 mt-2 text-center">{recordStatus}</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() =>
                        alert(
                          "تم حفظ تدوينة اليوم (القراءة، الاستماع، والكتابة) بنجاح في سجل المتابعة الخاص بكِ! 🌟"
                        )
                      }
                      className="w-full bg-[#1E3A8A] text-white py-3 rounded-xl font-bold text-sm shadow hover:bg-blue-900 transition"
                    >
                      💾 حفظ تدوينة اليوم في سجلي
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 2. تبويب خطط المستويات */}
            {activeTab === "roadmap" && (
              <div className="bg-white rounded-2xl p-6 border shadow-sm space-y-6">
                <div>
                  <h3 className="font-extrabold text-xl text-[#1E3A8A] mb-2">
                    دليل الممارسة والأنشطة الشامل حسب المستوى
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">
                    اختر مستواك لعرض خطة القراءة والاستماع، القواعد المطلوبة، والمواضيع المخصصة:
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {(["A1", "A2", "B1", "B2"] as const).map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setRoadmapLevel(lvl)}
                        className={`py-2.5 rounded-xl font-bold text-sm ${
                          roadmapLevel === lvl
                            ? "bg-[#1E3A8A] text-white shadow"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        مستوى {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border-b pb-3">
                    <h4 className="font-extrabold text-lg text-gray-800">
                      {levelsData[roadmapLevel].title}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 space-y-2">
                      <h5 className="font-extrabold text-sky-900 text-base">
                        📖 خطة القراءة ({roadmapLevel})
                      </h5>
                      <p className="text-xs text-sky-950 leading-relaxed">
                        {levelsData[roadmapLevel].reading.desc}
                      </p>
                      <p className="text-xs text-sky-800 font-semibold pt-2 border-t border-sky-200">
                        المصادر المقترحة: {levelsData[roadmapLevel].reading.sources}
                      </p>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-2">
                      <h5 className="font-extrabold text-emerald-900 text-base">
                        🎧 خطة الاستماع ({roadmapLevel})
                      </h5>
                      <p className="text-xs text-emerald-950 leading-relaxed">
                        {levelsData[roadmapLevel].listening.desc}
                      </p>
                      <p className="text-xs text-emerald-800 font-semibold pt-2 border-t border-emerald-200">
                        المصادر المقترحة: {levelsData[roadmapLevel].listening.sources}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border rounded-2xl p-5 space-y-3">
                    <h5 className="font-extrabold text-gray-800 text-base">
                      📐 القواعد المطلوبة في مستوى {roadmapLevel} (Grammar)
                    </h5>
                    <div className="flex flex-wrap gap-2" dir="ltr">
                      {levelsData[roadmapLevel].grammar.map((g, i) => (
                        <span
                          key={i}
                          className="bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-800"
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white border rounded-2xl p-5 space-y-3">
                    <h5 className="font-extrabold text-gray-800 text-base">
                      ✍️ مواضيع الكتابة والتحدث لمستوى {roadmapLevel} (50 موضوعاً)
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-96 overflow-y-auto pr-1">
                      {levelsData[roadmapLevel].topics.map((t, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center bg-gray-50 hover:bg-blue-50 p-2.5 rounded-xl border text-xs transition"
                        >
                          <span className="font-medium text-gray-800" dir="ltr">
                            {t}
                          </span>
                          <button
                            onClick={() => startTopicFromRoadmap(roadmapLevel, t)}
                            className="text-[#1E3A8A] font-bold underline shrink-0 mr-2"
                          >
                            تدوين ✍️
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. تبويب اختبار تحديد المستوى */}
            {activeTab === "test" && (
              <div className="bg-white rounded-2xl p-6 border shadow-sm space-y-4 text-center">
                <h3 className="font-bold text-xl text-[#1E3A8A]">اختبار تحديد المستوى السريع</h3>
                <p className="text-sm text-gray-600">أجب عن الأسئلة التالية لمعرفة مستواك المقترح:</p>
                <div className="p-4 bg-gray-50 rounded-xl border max-w-lg mx-auto text-right space-y-4">
                  <div>
                    <p className="font-bold text-sm mb-2">1. اختر الجملة الأصح نحوياً:</p>
                    <label className="block text-xs mb-1.5 cursor-pointer" dir="ltr">
                      <input
                        type="radio"
                        name="q1"
                        value="1"
                        onChange={(e) => setQ1(e.target.value)}
                      />{" "}
                      She go to school every day.
                    </label>
                    <label className="block text-xs mb-1.5 cursor-pointer" dir="ltr">
                      <input
                        type="radio"
                        name="q1"
                        value="2"
                        onChange={(e) => setQ1(e.target.value)}
                      />{" "}
                      She goes to school every day.
                    </label>
                  </div>
                  <div className="border-t pt-3">
                    <p className="font-bold text-sm mb-2">
                      2. أكمل الجملة: If I ____ more time, I would travel around the world.
                    </p>
                    <label className="block text-xs mb-1.5 cursor-pointer" dir="ltr">
                      <input
                        type="radio"
                        name="q2"
                        value="1"
                        onChange={(e) => setQ2(e.target.value)}
                      />{" "}
                      have
                    </label>
                    <label className="block text-xs mb-1.5 cursor-pointer" dir="ltr">
                      <input
                        type="radio"
                        name="q2"
                        value="2"
                        onChange={(e) => setQ2(e.target.value)}
                      />{" "}
                      had
                    </label>
                  </div>
                </div>
                <button
                  onClick={handleCalculateLevel}
                  className="bg-[#1E3A8A] text-white px-6 py-2.5 rounded-xl text-sm font-semibold"
                >
                  إظهار النتيجة
                </button>
                {testResult && <div className="font-bold text-emerald-700 mt-2">{testResult}</div>}
              </div>
            )}

            {/* 4. تبويب حاسبة الوقت */}
            {activeTab === "calculator" && (
              <div className="bg-white rounded-2xl p-6 border shadow-sm space-y-4">
                <h3 className="font-bold text-lg text-[#1E3A8A]">حاسبة خطة التعلم والمدة الزمنية</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      اختر مستواك الحالي:
                    </label>
                    <select
                      value={calcLevel}
                      onChange={(e) => setCalcLevel(e.target.value)}
                      className="w-full px-3 py-2 border rounded-xl text-sm"
                    >
                      <option value="A1">مستوى A1 (المبتدئ)</option>
                      <option value="A2">مستوى A2 (ما قبل المتوسط)</option>
                      <option value="B1">مستوى B1 (المتوسط)</option>
                      <option value="B2">مستوى B2 (فوق المتوسط)</option>
                      <option value="C1">مستوى C1 (المتقدم)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      عدد ساعات التعلم يومياً:
                    </label>
                    <select
                      value={calcHours}
                      onChange={(e) => setCalcHours(e.target.value)}
                      className="w-full px-3 py-2 border rounded-xl text-sm"
                    >
                      <option value="1">ساعة واحدة يومياً</option>
                      <option value="2">ساعتان يومياً</option>
                      <option value="3">3 ساعات يومياً</option>
                      <option value="6">6 ساعات يومياً (مكثف)</option>
                    </select>
                  </div>
                </div>
                <button
                  onClick={handleRunCalculator}
                  className="bg-[#1E3A8A] text-white px-6 py-2 rounded-xl text-sm font-semibold"
                >
                  احسب المدة الزمنية والجدول
                </button>
                {calcResult && (
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-sm text-blue-900">
                    {calcResult}
                  </div>
                )}
              </div>
            )}

            {/* 5. تبويب قوالب التحدث */}
            {activeTab === "starters" && (
              <div className="bg-white rounded-2xl p-6 border shadow-sm space-y-4">
                <h3 className="font-bold text-lg text-[#1E3A8A]">
                  ملف قوالب التحدث والكتابة (A1 - C1)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 bg-gray-50 rounded-xl border">
                    <h4 className="font-bold text-blue-900 mb-1">
                      1. Likes & Dislikes (الإعجاب والتفضيل)
                    </h4>
                    <p className="text-xs text-gray-600" dir="ltr">
                      I like... / I really like... / I prefer... / I'm a big fan of... / I can't stand...
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border">
                    <h4 className="font-bold text-blue-900 mb-1">2. Opinions (إبداء الرأي)</h4>
                    <p className="text-xs text-gray-600" dir="ltr">
                      I think... / In my opinion... / I believe... / From my perspective...
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border">
                    <h4 className="font-bold text-blue-900 mb-1">
                      3. Daily Routines (الروتين اليومي)
                    </h4>
                    <p className="text-xs text-gray-600" dir="ltr">
                      Usually, I... / First of all... / After that... / In the evening...
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border">
                    <h4 className="font-bold text-blue-900 mb-1">
                      4. Giving Examples (إعطاء أمثلة)
                    </h4>
                    <p className="text-xs text-gray-600" dir="ltr">
                      For example... / For instance... / Such as... / A good example of this is...
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 6. تبويب مجتمع ويم */}
            {activeTab === "community" && (
              <div className="bg-white rounded-2xl p-6 border shadow-sm text-center space-y-4">
                <h3 className="font-bold text-xl text-[#1E3A8A]">مجتمع ويم للتحدث والنقاش</h3>
                <p className="text-sm text-gray-600">
                  انضمي إلى قروب التليجرام الخاص بـ Wem Studio لتطوير لغتكِ مع زميلاتكِ ومشاركة
                  تدويناتكِ اليومية.
                </p>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-sky-500 text-white font-bold px-6 py-3 rounded-xl shadow hover:bg-sky-600 transition"
                >
                  انضمي لمجتمع الممارسة والتليجرام
                </a>
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
}
