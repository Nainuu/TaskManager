import React from 'react'
import Card from './shared/Card'

export default function Summary() {
  return (
    <>
        <div className="flex flex-col flex-grow bg-slate-200 font-geist p-4">
            <div className="mb-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center sm:text-left">
                Welcome to the Dashboard
              </h2>
              <h3 className="text-sm sm:text-base lg:text-lg text-center sm:text-left">
                This is your Dashboard where you can manage your routine, tasks, and notes.
              </h3>
            </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
              {/* Cards for Task, Routine, Notes, Reminder */}
              <Card name="Task" />
              <Card name="Routine" />
              <Card name="Notes" />
              <Card name="Reminder" />
            </div>
        </div>
    </>
  )
}
