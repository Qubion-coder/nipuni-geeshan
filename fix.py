import sys

with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Part 1: Names and Dates
content = content.replace("Naween & Nadeesha", "Nipuni & Geeshan")
content = content.replace('new Date("June 12, 2026 10:17:00")', 'new Date("November 27, 2026 17:48:00")')
content = content.replace("Nimmi & Rishan", "Nipuni & Geeshan")
content = content.replace("JUNE 12, 2026", "NOVEMBER 27, 2026")
content = content.replace("NIMMI & RISHAN", "NIPUNI & GEESHAN")
content = content.replace(">N&R<", ">N&G<")
content = content.replace(">Nimmi<", ">Nipuni<")
content = content.replace(">Rishan<", ">Geeshan<")
content = content.replace("12 JUNE 2026", "27 NOVEMBER 2026")
content = content.replace("Palenda, Sri Lanka", "Homagama, Sri Lanka")

# Part 2: Parents
content = content.replace("Mr. G. Gamunu Nimal Kumaratunga<br />& Mrs. T. M. Nayomi Priyangika", "Mr. Nimalsiri Thissera<br />& Mrs. Walpita Gamage Shanthi")
content = content.replace("Mr. M. Lalith Kumara<br />& Mrs. G. V. Champika Deepani", "Mr. Premawansha Herath<br />& Mrs. Seela Herath")

# Part 3: Time and Date display
content = content.replace("FRIDAY, 12 JUNE", "FRIDAY, 27 NOV")
content = content.replace("10:30 AM", "06:30 PM")
content = content.replace("To 04:30 PM", "To 11:30 PM")
content = content.replace("Poruwa Ceremony at 10:17 AM", "Poruwa Ceremony at 05:48 PM")

# Part 4: Venue
content = content.replace("SUEEN Nature Hotel", 'Hotel Green Court\n                        <span className="block text-3xl md:text-5xl mt-2 text-theme-700">Dukes Lounge</span>')
content = content.replace("Baduraliya, Palenda,<br /> Sri Lanka.", "No 06, Pinketha Road,<br /> Homagama.")
content = content.replace("https://maps.app.goo.gl/9mGfLwJQ9srnPdev6", "https://maps.app.goo.gl/S4ExfmK79q5CjUWQ6")
content = content.replace("https://maps.google.com/maps?q=Sueen%20Nature,%20Palenda,%20Baduraliya,%20Sri%20Lanka&t=&z=14&ie=UTF8&iwloc=&output=embed", "https://maps.google.com/maps?q=Hotel%20Green%20Court,%20Homagama&t=&z=14&ie=UTF8&iwloc=&output=embed")

# Part 5: Colors
content = content.replace('["#f1d6e8", "#e8bdd9", "#dd9ec8", "#fdf7fb"]', '["#efd8c5", "#e4bc9f", "#d69873", "#fcf6f1"]')
content = content.replace("rgba(243,167,205,0.5)", "rgba(200,118,75,0.5)")
content = content.replace("rgba(243,167,205,0.35)", "rgba(200,118,75,0.35)")
content = content.replace("rgba(241,214,232,0.2)", "rgba(239,216,197,0.2)")
content = content.replace("rgba(82,38,66,0.35)", "rgba(101,51,36,0.35)")
content = content.replace("from-[#3b2a36] via-[#4f3652] to-[#2a1d2d]", "from-theme-700 via-theme-600 to-theme-800")
content = content.replace("rgba(29,13,27,0.45)", "rgba(30,15,10,0.45)")
content = content.replace("via-[#fff5fb]", "via-[#fff8f5]")
content = content.replace("rgba(131,63,105,0.65)", "rgba(125,60,41,0.65)")
content = content.replace("border-[#432f3f]", "border-[#523325]")
content = content.replace("rgba(131,63,105,0.45)", "rgba(125,60,41,0.45)")
content = content.replace("rgba(188,95,153,0.2)", "rgba(187,94,57,0.2)")
content = content.replace("background: #f3a7cd", "background: #c8764b")
content = content.replace("border-radius: 10px;", "border-radius: 4px;")

# Part 6: RSVP Section
content = content.replace("We would be absolutely thrilled to celebrate with you. Kindly respond by the end of May.", "As we need to finalize the details for the celebration, your early response is incredibly helpful to us and our vendors. Please let us know your plans before 20th of November 2026!")
content = content.replace("bg-[#2c2a26]", "bg-[#CC5500]")

with open("src/App.tsx", "w", encoding="utf-8") as f:
    f.write(content)
print("done")
