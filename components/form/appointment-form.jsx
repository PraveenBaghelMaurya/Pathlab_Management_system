"use client"

import { useState } from "react"
import { InputField } from "./input-field"
import { SelectField } from "./select-field"
import { Button } from "@/components/ui/button"

const testOptions = [
  { value: "mri", label: "MRI" },
  { value: "ct_scan", label: "CT Scan" },
  { value: "blood_test", label: "Blood Test" },
  { value: "x_ray", label: "X-Ray" },
  { value: "ultrasound", label: "Ultrasound" },
  { value: "thyroid", label: "Thyroid Function Test" },
]

const timeSlotOptions = [
  { value: "morning", label: "Morning (9:00 AM - 12:00 PM)" },
  { value: "afternoon", label: "Afternoon (12:00 PM - 3:00 PM)" },
  { value: "evening", label: "Evening (3:00 PM - 6:00 PM)" },
]

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    age: "",
    mobileNumber: "",
    email: "",
    test: "",
    timeSlot: "",
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.age) newErrors.age = "Age is required"
    if (!formData.mobileNumber) newErrors.mobileNumber = "Mobile number is required"
    else if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Enter a valid 10-digit number"

    if (!formData.email) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email address"

    if (!formData.test) newErrors.test = "Please select a test"
    if (!formData.timeSlot) newErrors.timeSlot = "Please select a time slot"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      console.log("Form submitted:", formData)
      // Here you would typically send the data to your backend
      alert("Appointment booked successfully!")

      // Reset form after successful submission
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        age: "",
        mobileNumber: "",
        email: "",
        test: "",
        timeSlot: "",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField
          label="FIRST NAME"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
          required
        />

        <InputField
          label="MIDDLE NAME"
          id="middleName"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
        />

        <InputField
          label="LAST NAME"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField
          label="AGE"
          id="age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          error={errors.age}
          required
        />

        <InputField
          label="MOBILE NUMBER"
          id="mobileNumber"
          name="mobileNumber"
          type="tel"
          value={formData.mobileNumber}
          onChange={handleChange}
          error={errors.mobileNumber}
          required
        />

        <InputField
          label="Email ID"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectField
          label="AVAILABLE TEST"
          id="test"
          name="test"
          options={testOptions}
          value={formData.test}
          onChange={handleChange}
          error={errors.test}
          required
        />

        <SelectField
          label="TIME SLOT BOOKING"
          id="timeSlot"
          name="timeSlot"
          options={timeSlotOptions}
          value={formData.timeSlot}
          onChange={handleChange}
          error={errors.timeSlot}
          required
        />
      </div>

      <div className="flex justify-center mt-8">
        <Button type="submit" size="lg" className="px-16 bg-green">
          BOOK
        </Button>
      </div>
    </form>
  )
}

