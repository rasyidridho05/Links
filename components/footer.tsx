import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <section id="__footer" className="py-5">
      <div className="text-center text-sm text-gray-100">
        <p>
          &copy; 2025, Built by{" "}
          <Link
            href="https://github.com/rasyidridho05"
            target="_blank"
            className="font-medium"
          >
            @HMSE Telkom University Purwokerto
          </Link>{" "}
        </p>
      </div>
    </section>
  )
}

export default Footer