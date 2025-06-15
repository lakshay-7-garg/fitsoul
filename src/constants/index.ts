// constants/index.ts

export const USER_PROGRAMS = [
  {
    id: 1,
    first_name: "Aarav",
    profilePic: "https://i.pinimg.com/736x/1a/88/1c/1a881cdc93e267ba871d3e523707e893.jpg",
    fitness_goal: "Weight Loss",
    height: "5'9\"",
    weight: "75 kg",
    age: 21,
    workout_days: 5,
    injuries: "Lower back pain",
    fitness_level: "Beginner",
    equipment_access: "Home workout with resistance bands",
    dietary_restrictions: "Lactose intolerant",
    workout_plan: {
      title: "Fat Burn & Core Strengthening",
      weekly_schedule: [
        { day: "Monday", focus: "Bodyweight HIIT", duration: "30 min" },
        { day: "Wednesday", focus: "Core + Cardio", duration: "30 min" },
        { day: "Friday", focus: "Resistance Band Strength", duration: "35 min" },
        { day: "Saturday", focus: "Yoga & Stretch", duration: "40 min" },
        { day: "Sunday", focus: "Active Walk", duration: "45 min" },
      ],
      description:
        "Aarav's program is designed to reduce belly fat, strengthen the lower back, and improve endurance through safe, progressive movement.",
    },
    diet_plan: {
      title: "Lactose-Free Indian Fat Loss Diet",
      daily_calories: "1,600 kcal",
      macros: { protein: "30%", carbs: "45%", fats: "25%" },
      meal_examples: [
        { meal: "Breakfast", example: "Poha with peanuts + green tea" },
        { meal: "Lunch", example: "Moong dal, roti, mixed veg sabzi" },
        { meal: "Dinner", example: "Grilled tofu with sautéed spinach & brown rice" },
        { meal: "Snacks", example: "Roasted chana, coconut water, fruits" },
      ],
      description:
        "High-fiber, dairy-free Indian meals that keep calories controlled while supporting gut health and fat loss.",
    },
  },
  {
    id: 2,
    first_name: "Mishti",
    profilePic: "https://www.ashoka.edu.in/wp-content/uploads/2022/08/Profile-67.png",
    fitness_goal: "Muscle Gain",
    height: "5'5\"",
    weight: "60 kg",
    age: 21,
    workout_days: 6,
    injuries: "None",
    fitness_level: "Intermediate",
    equipment_access: "Full gym access",
    dietary_restrictions: "None",
    workout_plan: {
      title: "Strength Training for Women",
      weekly_schedule: [
        { day: "Monday", focus: "Lower Body - Glutes & Quads", duration: "50 min" },
        { day: "Tuesday", focus: "Upper Body - Push", duration: "45 min" },
        { day: "Wednesday", focus: "Mobility & Core", duration: "30 min" },
        { day: "Thursday", focus: "Lower Body - Hamstrings", duration: "50 min" },
        { day: "Friday", focus: "Upper Body - Pull", duration: "45 min" },
        { day: "Saturday", focus: "Cardio + Abs", duration: "30 min" },
      ],
      description:
        "Focuses on building lean muscle mass with progressive overload. Designed to help women tone up with proper recovery and minimal fat gain.",
    },
    diet_plan: {
      title: "High Protein Indian Muscle Gain Diet",
      daily_calories: "2,300 kcal",
      macros: { protein: "35%", carbs: "45%", fats: "20%" },
      meal_examples: [
        { meal: "Breakfast", example: "Paneer bhurji, oats, milk" },
        { meal: "Lunch", example: "Rajma rice, salad, curd" },
        { meal: "Dinner", example: "Chicken curry with multigrain roti" },
        { meal: "Snacks", example: "Protein shake, boiled eggs, bananas" },
      ],
      description:
        "Balanced Indian meals focusing on lean proteins and complex carbs to fuel training and build muscle.",
    },
  },
  {
    id: 3,
    first_name: "Araya",
    profilePic: "https://png.pngtree.com/png-vector/20241016/ourmid/pngtree-21-and-ambitious-linkedin-profile-photo-of-an-aspiring-indian-professional-png-image_14098491.png",
    fitness_goal: "General Fitness",
    height: "5'8\"",
    weight: "68 kg",
    age: 19,
    workout_days: 4,
    injuries: "Knee stiffness",
    fitness_level: "Intermediate",
    equipment_access: "Bodyweight only",
    dietary_restrictions: "Vegetarian",
    workout_plan: {
      title: "Functional Mobility & Strength",
      weekly_schedule: [
        { day: "Monday", focus: "Mobility + Core", duration: "40 min" },
        { day: "Wednesday", focus: "Full Body Strength (Bodyweight)", duration: "35 min" },
        { day: "Friday", focus: "Cardio Intervals", duration: "30 min" },
        { day: "Sunday", focus: "Yoga + Recovery", duration: "45 min" },
      ],
      description:
        "Functional workouts focused on joint mobility, core strength, and daily movement improvement for long-term fitness.",
    },
    diet_plan: {
      title: "Simple Indian Vegetarian Plan",
      daily_calories: "1,800 kcal",
      macros: { protein: "25%", carbs: "50%", fats: "25%" },
      meal_examples: [
        { meal: "Breakfast", example: "Besan chilla with mint chutney" },
        { meal: "Lunch", example: "Toor dal, bhindi, brown rice" },
        { meal: "Dinner", example: "Vegetable pulao, curd, salad" },
        { meal: "Snacks", example: "Fruit bowl, buttermilk, roasted makhana" },
      ],
      description:
        "Sattvic Indian meals that promote digestion, energy, and strength without processed ingredients.",
    },
  },
];
