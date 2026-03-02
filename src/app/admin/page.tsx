"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, Workflow, Zap, Shield, CheckCircle2, Clock, RefreshCw, AlertCircle, Database, Lock, GitBranch, BarChart, Users, TrendingUp, Award, Key } from "lucide-react";


export default function Admin(){

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <div className="flex flex-col items-center h-full w-full">

            <div className="grid grid-cols-1 w-full">
                 <div className="min-h-screen bg-white">
                    {/* Navigation Header */}
                    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB]">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-[#2FAE4F] rounded-lg flex items-center justify-center">
                                <Workflow className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-semibold text-[#2F2F2F]">AutoProp</span>
                            </div>
                            <nav className="hidden md:flex items-center gap-8">
                            <button onClick={() => scrollToSection('features')} className="text-[#2F2F2F] hover:text-[#2FAE4F] transition-colors">Features</button>
                            <button onClick={() => scrollToSection('how-it-works')} className="text-[#2F2F2F] hover:text-[#2FAE4F] transition-colors">How It Works</button>
                            <button onClick={() => scrollToSection('benefits')} className="text-[#2F2F2F] hover:text-[#2FAE4F] transition-colors">Benefits</button>
                            </nav>
                            <Button 
                            className="bg-[#2FAE4F] hover:bg-[#27953F] text-white"
                            onClick={() => scrollToSection('cta')}
                            >
                            Request Early Access
                            </Button>
                        </div>
                        </div>
                    </header>

                    {/* Hero Section */}
                    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F9F9F9] py-20 lg:py-32">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-4xl lg:text-6xl font-bold text-[#2F2F2F] leading-tight">
                                Automate Propertyware. Run Smarter.
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                API-powered workflows that eliminate manual work for property managers.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button 
                                size="lg" 
                                className="bg-[#2FAE4F] hover:bg-[#27953F] text-white text-lg px-8"
                                onClick={() => scrollToSection('cta')}
                                >
                                Request Early Access
                                <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button 
                                size="lg" 
                                variant="outline" 
                                className="border-[#2FAE4F] text-[#2FAE4F] hover:bg-[#2FAE4F]/10 text-lg px-8"
                                onClick={() => scrollToSection('features')}
                                >
                                View Features
                                </Button>
                            </div>
                            </div>

                            {/* Dashboard Mockup */}
                            <div className="relative">
                            <div className="bg-white rounded-xl shadow-2xl border border-[#E5E7EB] p-6">
                                <div className="flex items-center gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-[#F9F9F9] rounded-lg">
                                    <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#2FAE4F] rounded-lg flex items-center justify-center">
                                        <CheckCircle2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-[#2F2F2F]">Lease Renewal Reminders</div>
                                        <div className="text-sm text-gray-500">Automated • 12 properties</div>
                                    </div>
                                    </div>
                                    <div className="px-3 py-1 bg-[#30FF2D]/20 text-[#2FAE4F] rounded-full text-sm font-medium">
                                    Active
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-[#F9F9F9] rounded-lg">
                                    <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#2FAE4F] rounded-lg flex items-center justify-center">
                                        <CheckCircle2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-[#2F2F2F]">Tenant Data Sync</div>
                                        <div className="text-sm text-gray-500">Automated • 45 units</div>
                                    </div>
                                    </div>
                                    <div className="px-3 py-1 bg-[#30FF2D]/20 text-[#2FAE4F] rounded-full text-sm font-medium">
                                    Active
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-[#F9F9F9] rounded-lg opacity-70">
                                    <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center">
                                        <Zap className="w-6 h-6 text-gray-500" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-[#2F2F2F]">Payment Notifications</div>
                                        <div className="text-sm text-gray-500">Ready to activate</div>
                                    </div>
                                    </div>
                                    <div className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-sm font-medium">
                                    Pending
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* Decorative automation lines */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#30FF2D]/30 rounded-full"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#2FAE4F]/10 rounded-full"></div>
                            </div>
                        </div>
                        </div>
                    </section>

                    {/* Problem Section */}
                    <section className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold text-[#2F2F2F] mb-4">
                            Property management shouldn&apos;t be this manual.
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            You have access to Propertyware&apos;s API, but no time to build the automation you need.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="p-6 rounded-xl border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <Clock className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#2F2F2F] mb-2">Repetitive data entry</h3>
                            <p className="text-gray-600">
                                Copying information between systems wastes hours every week that could be spent growing your business.
                            </p>
                            </div>
                            <div className="p-6 rounded-xl border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                <RefreshCw className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#2F2F2F] mb-2">Manual follow-ups</h3>
                            <p className="text-gray-600">
                                Tracking lease renewals, payment reminders, and maintenance requests manually leads to missed deadlines.
                            </p>
                            </div>
                            <div className="p-6 rounded-xl border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                                <AlertCircle className="w-6 h-6 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#2F2F2F] mb-2">Inconsistent workflows</h3>
                            <p className="text-gray-600">
                                Without standardized processes, every team member handles tasks differently, creating confusion.
                            </p>
                            </div>
                            <div className="p-6 rounded-xl border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <GitBranch className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#2F2F2F] mb-2">Scaling headaches</h3>
                            <p className="text-gray-600">
                                Adding more properties means hiring more staff just to handle administrative work.
                            </p>
                            </div>
                            <div className="p-6 rounded-xl border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <Database className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#2F2F2F] mb-2">API access but no tooling</h3>
                            <p className="text-gray-600">
                                You know the API could solve these problems, but building custom integrations isn&apos;t in your budget.
                            </p>
                            </div>
                        </div>
                        </div>
                    </section>

                    {/* Solution Section */}
                    <section id="features" className="py-20 bg-[#F9F9F9]">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold text-[#2F2F2F] mb-4">
                            Automation built on Propertyware&apos;s API
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Pre-built workflows designed specifically for property managers. Connect once, automate forever.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#E5E7EB]">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#2FAE4F] to-[#30FF2D] rounded-xl flex items-center justify-center mb-6">
                                <Workflow className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#2F2F2F] mb-3">Automated task workflows</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Set up triggers for lease renewals, payment reminders, maintenance scheduling, and more. Your workflows run 24/7 without manual intervention.
                            </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#E5E7EB]">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#2FAE4F] to-[#30FF2D] rounded-xl flex items-center justify-center mb-6">
                                <Database className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#2F2F2F] mb-3">Real-time data syncing</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Keep property, tenant, and lease information synchronized across your tools. Updates happen instantly through Propertyware&apos;s API.
                            </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#E5E7EB]">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#2FAE4F] to-[#30FF2D] rounded-xl flex items-center justify-center mb-6">
                                <Zap className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#2F2F2F] mb-3">Event-based triggers</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Respond automatically to status changes, new leases, payment events, and more. Smart automation that knows when to act.
                            </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#E5E7EB]">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#2FAE4F] to-[#30FF2D] rounded-xl flex items-center justify-center mb-6">
                                <Lock className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#2F2F2F] mb-3">Secure API-first architecture</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Built with security in mind. Encrypted connections, scoped permissions, and read-only access where appropriate protect your data.
                            </p>
                            </div>
                        </div>
                        </div>
                    </section>

                    {/* How It Works Section */}
                    <section id="how-it-works" className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold text-[#2F2F2F] mb-4">
                            Get started in minutes
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            No coding required. Just connect, configure, and let automation take over.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
                            {/* Flow arrows for desktop */}
                            <div className="hidden md:block absolute top-1/4 left-1/3 transform -translate-x-1/2">
                            <ArrowRight className="w-8 h-8 text-[#2FAE4F]" />
                            </div>
                            <div className="hidden md:block absolute top-1/4 left-2/3 transform -translate-x-1/2">
                            <ArrowRight className="w-8 h-8 text-[#2FAE4F]" />
                            </div>

                            <div className="relative">
                            <div className="bg-white p-8 rounded-xl border-2 border-[#2FAE4F] shadow-lg">
                                <div className="w-16 h-16 bg-[#2FAE4F] rounded-full flex items-center justify-center mb-6 mx-auto">
                                <span className="text-2xl font-bold text-white">1</span>
                                </div>
                                <h3 className="text-2xl font-semibold text-[#2F2F2F] mb-3 text-center">
                                Connect your Propertyware account
                                </h3>
                                <p className="text-gray-600 text-center leading-relaxed">
                                Securely link your Propertyware account using API credentials. Your data stays protected with encrypted connections.
                                </p>
                            </div>
                            </div>

                            <div className="relative">
                            <div className="bg-white p-8 rounded-xl border-2 border-[#2FAE4F] shadow-lg">
                                <div className="w-16 h-16 bg-[#2FAE4F] rounded-full flex items-center justify-center mb-6 mx-auto">
                                <span className="text-2xl font-bold text-white">2</span>
                                </div>
                                <h3 className="text-2xl font-semibold text-[#2F2F2F] mb-3 text-center">
                                Configure automation rules
                                </h3>
                                <p className="text-gray-600 text-center leading-relaxed">
                                Choose from pre-built workflows or customize triggers and actions to match your processes perfectly.
                                </p>
                            </div>
                            </div>

                            <div className="relative">
                            <div className="bg-white p-8 rounded-xl border-2 border-[#2FAE4F] shadow-lg">
                                <div className="w-16 h-16 bg-[#2FAE4F] rounded-full flex items-center justify-center mb-6 mx-auto">
                                <span className="text-2xl font-bold text-white">3</span>
                                </div>
                                <h3 className="text-2xl font-semibold text-[#2F2F2F] mb-3 text-center">
                                Let workflows run automatically
                                </h3>
                                <p className="text-gray-600 text-center leading-relaxed">
                                Sit back and watch as your automation handles tasks 24/7. Monitor everything from your centralized dashboard.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>

                    {/* Benefits Section */}
                    <section id="benefits" className="py-20 bg-[#F9F9F9]">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold text-[#2F2F2F] mb-4">
                            Less busywork. More control.
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Transform how you manage properties with intelligent automation.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-xl border border-[#E5E7EB] shadow-md">
                            <div className="w-12 h-12 bg-[#2FAE4F]/10 rounded-lg flex items-center justify-center mb-4">
                                <Clock className="w-6 h-6 text-[#2FAE4F]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#2F2F2F] mb-3">Save hours every week</h3>
                            <p className="text-gray-600">
                                Eliminate repetitive tasks and reclaim time for strategic work that grows your business.
                            </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl border border-[#E5E7EB] shadow-md">
                            <div className="w-12 h-12 bg-[#2FAE4F]/10 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6 text-[#2FAE4F]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#2F2F2F] mb-3">Reduce human error</h3>
                            <p className="text-gray-600">
                                Automated workflows follow exact rules every time, ensuring consistency and accuracy across all properties.
                            </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl border border-[#E5E7EB] shadow-md">
                            <div className="w-12 h-12 bg-[#2FAE4F]/10 rounded-lg flex items-center justify-center mb-4">
                                <TrendingUp className="w-6 h-6 text-[#2FAE4F]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#2F2F2F] mb-3">Scale without adding staff</h3>
                            <p className="text-gray-600">
                                Manage more properties with the same team size. Automation scales effortlessly as you grow.
                            </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl border border-[#E5E7EB] shadow-md">
                            <div className="w-12 h-12 bg-[#2FAE4F]/10 rounded-lg flex items-center justify-center mb-4">
                                <BarChart className="w-6 h-6 text-[#2FAE4F]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#2F2F2F] mb-3">Centralized automation dashboard</h3>
                            <p className="text-gray-600">
                                Monitor all your workflows in one place. Track performance, identify bottlenecks, and optimize operations.
                            </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl border border-[#E5E7EB] shadow-md">
                            <div className="w-12 h-12 bg-[#2FAE4F]/10 rounded-lg flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-[#2FAE4F]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#2F2F2F] mb-3">Built for real property managers</h3>
                            <p className="text-gray-600">
                                Created by professionals who understand your challenges. Every feature solves real-world problems.
                            </p>
                            </div>
                        </div>
                        </div>
                    </section>

                    {/* Trust & Credibility Section */}
                    <section className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gradient-to-br from-[#2FAE4F]/5 to-[#30FF2D]/5 rounded-2xl p-12 border border-[#2FAE4F]/20">
                            <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2FAE4F] rounded-full mb-6">
                                <Shield className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#2F2F2F] mb-4">
                                Security and trust built-in
                                </h2>
                                <p className="text-xl text-gray-600">
                                Your data security is our top priority. Built specifically for Propertyware users.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                                    <Lock className="w-6 h-6 text-[#2FAE4F]" />
                                </div>
                                <h3 className="font-semibold text-[#2F2F2F] mb-2">Secure API access</h3>
                                <p className="text-gray-600 text-sm">
                                    Encrypted connections and industry-standard security protocols protect your data.
                                </p>
                                </div>
                                <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                                    <Key className="w-6 h-6 text-[#2FAE4F]" />
                                </div>
                                <h3 className="font-semibold text-[#2F2F2F] mb-2">Scoped permissions</h3>
                                <p className="text-gray-600 text-sm">
                                    Read-only and scoped permissions ensure access only to what's needed.
                                </p>
                                </div>
                                <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                                    <Award className="w-6 h-6 text-[#2FAE4F]" />
                                </div>
                                <h3 className="font-semibold text-[#2F2F2F] mb-2">Built by experts</h3>
                                <p className="text-gray-600 text-sm">
                                    Created by property management professionals who understand your needs.
                                </p>
                                </div>
                            </div>
                            <div className="mt-12 text-center">
                                <p className="text-gray-600 italic">
                                &quot;Early access partners are helping shape the future of property management automation.&quot;
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>

                    {/* Final CTA Section */}
                    <section id="cta" className="py-24 bg-gradient-to-br from-[#2FAE4F] to-[#27953F] relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#30FF2D]/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                        
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Ready to automate Propertyware?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Join early users shaping the future of property management automation.
                        </p>
                        <Button 
                            size="lg" 
                            className="bg-white text-[#2FAE4F] hover:bg-gray-100 text-lg px-12 py-6 h-auto shadow-xl"
                        >
                            Request Early Access
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <p className="text-white/80 mt-6 text-sm">
                            No credit card required • Early access pricing available
                        </p>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="bg-[#2F2F2F] text-white py-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="flex items-center gap-2 mb-6 md:mb-0">
                            <div className="w-8 h-8 bg-[#2FAE4F] rounded-lg flex items-center justify-center">
                                <Workflow className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-semibold">AutoProp</span>
                            </div>
                            <div className="text-center md:text-right">
                            <p className="text-gray-400 text-sm">
                                Automate your Propertyware workflows. Save hours every week.
                            </p>
                            <p className="text-gray-500 text-xs mt-2">
                                © 2026 AutoProp. Built for property managers.
                            </p>
                            </div>
                        </div>
                        </div>
                    </footer>
                    </div>
            </div>
        </div>
    )
}