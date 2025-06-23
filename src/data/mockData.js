export const mockRestaurants = [
  {
    id: 1,
    name: "Very Long Name Restaurant Number 1 In List",
    categories: ["Italian", "Fine Dining"],
    rating: 4.5,
    priceRange: "$$$$",
    isOpen: true,
    photos: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, name: "John Doe", rating: 5, text: "Amazing food and service!", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" },
      { id: 2, name: "Jane Smith", rating: 4, text: "Great atmosphere, will come back!", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face" }
    ]
  },
  {
    id: 2,
    name: "Restaurant 2",
    categories: ["Asian", "Thai"],
    rating: 4.0,
    priceRange: "$$$",
    isOpen: false,
    photos: ["https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, name: "Mike Johnson", rating: 4, text: "Authentic Thai flavors!", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" }
    ]
  },
  {
    id: 3,
    name: "Restaurant 3",
    categories: ["Mexican", "Fast Food"],
    rating: 3.5,
    priceRange: "$$",
    isOpen: true,
    photos: ["https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, name: "Sarah Wilson", rating: 4, text: "Quick service and tasty!", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face" }
    ]
  },
  {
    id: 4,
    name: "Restaurant 4",
    categories: ["American", "Burger"],
    rating: 4.2,
    priceRange: "$$",
    isOpen: true,
    photos: ["https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, name: "Tom Brown", rating: 5, text: "Best burgers in town!", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face" }
    ]
  },
  {
    id: 5,
    name: "Restaurant 5",
    categories: ["Japanese", "Sushi"],
    rating: 4.8,
    priceRange: "$$$$",
    isOpen: false,
    photos: ["https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, name: "Lisa Chen", rating: 5, text: "Fresh sushi, excellent quality!", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face" }
    ]
  },
  {
    id: 6,
    name: "Restaurant 6",
    categories: ["French", "Fine Dining"],
    rating: 4.3,
    priceRange: "$$$$",
    isOpen: true,
    photos: ["https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, name: "Pierre Dubois", rating: 4, text: "Authentic French cuisine!", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" }
    ]
  },
  {
    id: 7,
    name: "Restaurant 7",
    categories: ["Indian", "Curry"],
    rating: 3.8,
    priceRange: "$$$",
    isOpen: true,
    photos: ["https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, name: "Raj Patel", rating: 4, text: "Spicy and delicious!", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" }
    ]
  },
  {
    id: 8,
    name: "Restaurant 8",
    categories: ["Chinese", "Dim Sum"],
    rating: 4.1,
    priceRange: "$$",
    isOpen: false,
    photos: ["https://images.unsplash.com/photo-1563379091339-03246963d70a?w=400&h=300&fit=crop"],
    reviews: [
      { id: 1, name: "Wei Zhang", rating: 4, text: "Great dim sum selection!", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face" }
    ]
  }
];

export const categories = ["All", "Italian", "Asian", "Thai", "Mexican", "American", "Japanese", "French", "Indian", "Chinese"];