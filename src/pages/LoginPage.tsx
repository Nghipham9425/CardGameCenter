import { Check, Lock, Mail } from 'lucide-react'
import { avatars } from '../data/avatars'

export function LoginPage({ onLoggedIn }: { onLoggedIn: () => void }) {
  return (
    <section className="grid min-h-screen place-items-center bg-[#fbfcfe] px-5 py-8 sm:px-8">
      <div className="w-full max-w-lg rounded-lg border border-slate-200 bg-white px-7 py-8 shadow-sm sm:px-12 sm:py-10">
        <div className="flex justify-center gap-3">
          {[avatars.bulbasaur, avatars.charmander, avatars.squirtle, avatars.pikachu].map((avatar) => (
            <img className="size-10 rounded-full bg-slate-50 p-1" src={avatar} alt="" key={avatar} />
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-base font-semibold text-slate-400">Please enter your trainer details</p>
          <h1 className="mt-2 text-4xl font-bold tracking-normal text-slate-950">
            Welcome back
          </h1>
        </div>

        <form className="mt-9 space-y-5" onSubmit={(event) => event.preventDefault()}>
          <label className="block">
            <span className="sr-only">Email address</span>
            <div className="flex h-12 items-center gap-3 rounded-md border border-slate-300 bg-white px-4">
              <Mail size={18} className="text-slate-400" />
              <input
                className="min-w-0 flex-1 text-base outline-none placeholder:text-slate-400"
                placeholder="Email address"
                type="email"
              />
            </div>
          </label>

          <label className="block">
            <span className="sr-only">Password</span>
            <div className="flex h-12 items-center gap-3 rounded-md border border-slate-300 bg-white px-4">
              <Lock size={18} className="text-slate-400" />
              <input
                className="min-w-0 flex-1 text-base outline-none placeholder:text-slate-400"
                placeholder="Password"
                type="password"
              />
            </div>
          </label>

          <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
            <label className="inline-flex items-center gap-2 font-medium text-slate-700">
              <span className="grid size-5 place-items-center rounded border border-slate-500">
                <Check size={14} className="text-transparent" />
              </span>
              Remember for 30 days
            </label>
            <button className="text-left font-semibold text-[#1976d2] underline" type="button">
              Forgot password
            </button>
          </div>

          <button
            className="h-12 w-full rounded-md bg-[#ffcb05] text-base font-bold text-[#263238] transition hover:bg-[#f2be00]"
            type="button"
            onClick={onLoggedIn}
          >
            Sign in
          </button>

          <button
            className="flex h-12 w-full items-center justify-center gap-3 rounded-md border border-slate-300 bg-white text-base font-semibold text-slate-700"
            type="button"
          >
            <span className="grid size-7 place-items-center rounded-full bg-[#e3f2fd] text-sm font-bold text-[#1976d2]">
              G
            </span>
            Sign in with Google
          </button>
        </form>

        <p className="mt-6 text-center text-base text-slate-400">
          Don't have an account?{' '}
          <button className="font-semibold text-[#1976d2] underline" type="button">
            Sign up
          </button>
        </p>
      </div>
    </section>
  )
}
