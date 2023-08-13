import React, {useState} from 'react';
import { CircularProgress, Grid, Typography, InputLabel,MenuItem,FormControl,Select } from '@material-ui/core';
import useStyles from './styles';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = (
  {places}
  ) => {
  const classes = useStyles();
  const [type, setType] = useState("resturants");
  const [rating, setRating] = useState("");

  // const places={
  //   "data": [
  //     {
  //       "location_id": "9982902",
  //       "name": "Yolo Man Restaurant",
  //       "latitude": "12.270622",
  //       "longitude": "109.108154",
  //       "num_reviews": "3",
  //       "timezone": "Asia/Ho_Chi_Minh",
  //       "location_string": "Dien Dien, Khanh Hoa Province",
  //       "photo": {
  //         "images": {
  //           "small": {
  //             "width": "250",
  //             "url": "https://media-cdn.tripadvisor.com/media/photo-f/0a/35/c6/91/getlstd-property-photo.jpg",
  //             "height": "144"
  //           },
  //           "thumbnail": {
  //             "width": "50",
  //             "url": "https://media-cdn.tripadvisor.com/media/photo-t/0a/35/c6/91/getlstd-property-photo.jpg",
  //             "height": "50"
  //           },
  //           "original": {
  //             "width": "550",
  //             "url": "https://media-cdn.tripadvisor.com/media/photo-s/0a/35/c6/91/getlstd-property-photo.jpg",
  //             "height": "318"
  //           },
  //           "large": {
  //             "width": "550",
  //             "url": "https://media-cdn.tripadvisor.com/media/photo-s/0a/35/c6/91/getlstd-property-photo.jpg",
  //             "height": "318"
  //           },
  //           "medium": {
  //             "width": "438",
  //             "url": "https://media-cdn.tripadvisor.com/media/photo-o/0a/35/c6/91/getlstd-property-photo.jpg",
  //             "height": "254"
  //           }
  //         },
  //         "is_blessed": true,
  //         "uploaded_date": "2016-02-02T08:55:35-0500",
  //         "caption": "getlstd_property_photo",
  //         "id": "171296401",
  //         "helpful_votes": "0",
  //         "published_date": "2016-02-02T08:55:35-0500",
  //         "user": {
  //           "user_id": null,
  //           "member_id": "0",
  //           "type": "user"
  //         }
  //       },
  //       "awards": [],
  //       "doubleclick_zone": "as.vietnam",
  //       "preferred_map_engine": "default",
  //       "raw_ranking": "3.059627056121826",
  //       "ranking_geo": "Dien Dien",
  //       "ranking_geo_id": "15296278",
  //       "ranking_position": "1",
  //       "ranking_denominator": "1",
  //       "ranking_category": "restaurant",
  //       "ranking": "#1 of 1 Restaurants in Dien Dien",
  //       "distance": "8.213921327616687",
  //       "distance_string": "8.2 km",
  //       "bearing": "south",
  //       "rating": "5.0",
  //       "is_closed": false,
  //       "open_now_text": "Open Now",
  //       "is_long_closed": false,
  //       "price_level": "$$ - $$$",
  //       "price": "$20,000 - $500,000",
  //       "description": "",
  //       "web_url": "https://www.tripadvisor.com/Restaurant_Review-g15296278-d9982902-Reviews-Yolo_Man_Restaurant-Dien_Dien_Khanh_Hoa_Province.html",
  //       "write_review": "https://www.tripadvisor.com/UserReview-g15296278-d9982902-Yolo_Man_Restaurant-Dien_Dien_Khanh_Hoa_Province.html",
  //       "ancestors": [
  //         {
  //           "subcategory": [
  //             {
  //               "key": "city",
  //               "name": "City"
  //             }
  //           ],
  //           "name": "Dien Dien",
  //           "abbrv": null,
  //           "location_id": "15296278"
  //         },
  //         {
  //           "subcategory": [
  //             {
  //               "key": "province",
  //               "name": "Province"
  //             }
  //           ],
  //           "name": "Khanh Hoa Province",
  //           "abbrv": null,
  //           "location_id": "1184689"
  //         },
  //         {
  //           "subcategory": [
  //             {
  //               "key": "country",
  //               "name": "Country"
  //             }
  //           ],
  //           "name": "Vietnam",
  //           "abbrv": null,
  //           "location_id": "293921"
  //         }
  //       ],
  //       "category": {
  //         "key": "restaurant",
  //         "name": "Restaurant"
  //       },
  //       "subcategory": [
  //         {
  //           "key": "sit_down",
  //           "name": "Sit down"
  //         }
  //       ],
  //       "parent_display_name": "Dien Dien",
  //       "is_jfy_enabled": false,
  //       "nearest_metro_station": [],
  //       "phone": "+84 58 3772 279",
  //       "website": "https://www.facebook.com/YOLO-Man-Restaurant-1569064976708000/",
  //       "email": "thinn80@gmail.com",
  //       "address_obj": {
  //         "street1": "24 Dong Khoi",
  //         "street2": null,
  //         "city": "Dien Dien",
  //         "state": null,
  //         "country": "Vietnam",
  //         "postalcode": "650000"
  //       },
  //       "address": "24 Dong Khoi, Dien Dien 650000 Vietnam",
  //       "hours": {
  //         "week_ranges": [
  //           [
  //             {
  //               "open_time": 540,
  //               "close_time": 1380
  //             }
  //           ],
  //           [
  //             {
  //               "open_time": 540,
  //               "close_time": 1380
  //             }
  //           ],
  //           [
  //             {
  //               "open_time": 540,
  //               "close_time": 1380
  //             }
  //           ],
  //           [
  //             {
  //               "open_time": 540,
  //               "close_time": 1380
  //             }
  //           ],
  //           [
  //             {
  //               "open_time": 540,
  //               "close_time": 1380
  //             }
  //           ],
  //           [
  //             {
  //               "open_time": 540,
  //               "close_time": 1380
  //             }
  //           ],
  //           [
  //             {
  //               "open_time": 540,
  //               "close_time": 1380
  //             }
  //           ]
  //         ],
  //         "timezone": "Asia/Ho_Chi_Minh"
  //       },
  //       "is_candidate_for_contact_info_suppression": false,
  //       "cuisine": [
  //         {
  //           "key": "10675",
  //           "name": "Vietnamese"
  //         }
  //       ],
  //       "dietary_restrictions": [],
  //       "establishment_types": [
  //         {
  //           "key": "10591",
  //           "name": "Restaurants"
  //         }
  //       ]
  //     },
  //     {
  //       "location_id": "11707706",
  //       "name": "Kincafe - Salvaged Ring Dien Khanh",
  //       "latitude": "12.264778",
  //       "longitude": "109.10869",
  //       "num_reviews": "1",
  //       "timezone": "Asia/Ho_Chi_Minh",
  //       "location_string": "Nha Trang, Khanh Hoa Province",
  //       "photo": {
  //         "images": {
  //           "small": {
  //             "width": "150",
  //             "url": "https://media-cdn.tripadvisor.com/media/photo-l/0d/53/95/c9/getlstd-property-photo.jpg",
  //             "height": "150"
  //           },
  //           "thumbnail": {
  //             "width": "50",
  //             "url": "https://media-cdn.tripadvisor.com/media/photo-t/0d/53/95/c9/getlstd-property-photo.jpg",
  //             "height": "50"
  //           },
  //           "original": {
  //             "width": "2048",
  //             "url": "https://media-cdn.tripadvisor.com/media/photo-o/0d/53/95/c9/getlstd-property-photo.jpg",
  //             "height": "1365"
  //           },
  //           "large": {
  //             "width": "1024",
  //             "url": "https://media-cdn.tripadvisor.com/media/photo-w/0d/53/95/c9/getlstd-property-photo.jpg",
  //             "height": "683"
  //           },
  //           "medium": {
  //             "width": "550",
  //             "url": "https://media-cdn.tripadvisor.com/media/photo-s/0d/53/95/c9/getlstd-property-photo.jpg",
  //             "height": "367"
  //           }
  //         },
  //         "is_blessed": true,
  //         "uploaded_date": "2016-10-17T00:15:19-0400",
  //         "caption": "getlstd_property_photo",
  //         "id": "223581641",
  //         "helpful_votes": "3",
  //         "published_date": "2016-10-17T00:15:19-0400",
  //         "user": {
  //           "user_id": null,
  //           "member_id": "0",
  //           "type": "user"
  //         }
  //       },
  //       "awards": [],
  //       "doubleclick_zone": "as.vietnam.khanh_hoa.nha_trang",
  //       "preferred_map_engine": "default",
  //       "raw_ranking": "3.026041030883789",
  //       "ranking_geo": "Nha Trang",
  //       "ranking_geo_id": "293928",
  //       "ranking_position": "539",
  //       "ranking_denominator": "632",
  //       "ranking_category": "restaurant",
  //       "ranking": "#413 of 640 Restaurants in Nha Trang",
  //       "distance": "8.843051774354308",
  //       "distance_string": "8.8 km",
  //       "bearing": "south",
  //       "rating": "5.0",
  //       "is_closed": false,
  //       "open_now_text": "Closes in 20 min",
  //       "is_long_closed": false,
  //       "price_level": "$",
  //       "price": "$14,000 - $70,000",
  //       "description": "Kincafe - Salvaged Ring Dien Khanh is one of the world's top 20 architecture 2014.",
  //       "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293928-d11707706-Reviews-Kincafe_Salvaged_Ring_Dien_Khanh-Nha_Trang_Khanh_Hoa_Province.html",
  //       "write_review": "https://www.tripadvisor.com/UserReview-g293928-d11707706-Kincafe_Salvaged_Ring_Dien_Khanh-Nha_Trang_Khanh_Hoa_Province.html",
  //       "ancestors": [
  //         {
  //           "subcategory": [
  //             {
  //               "key": "city",
  //               "name": "City"
  //             }
  //           ],
  //           "name": "Nha Trang",
  //           "abbrv": null,
  //           "location_id": "293928"
  //         },
  //         {
  //           "subcategory": [
  //             {
  //               "key": "province",
  //               "name": "Province"
  //             }
  //           ],
  //           "name": "Khanh Hoa Province",
  //           "abbrv": null,
  //           "location_id": "1184689"
  //         },
  //         {
  //           "subcategory": [
  //             {
  //               "key": "country",
  //               "name": "Country"
  //             }
  //           ],
  //           "name": "Vietnam",
  //           "abbrv": null,
  //           "location_id": "293921"
  //         }
  //       ],
  //       "category": {
  //         "key": "restaurant",
  //         "name": "Restaurant"
  //       },
  //       "subcategory": [
  //         {
  //           "key": "cafe",
  //           "name": "Café"
  //         }
  //       ],
  //       "parent_display_name": "Nha Trang",
  //       "is_jfy_enabled": false,
  //       "nearest_metro_station": [],
  //       "phone": "+84 89 803 40 39",
  //       "website": "http://www.facebook.com/kincafenhatrang",
  //       "email": "minhkhangwood@gmail.com",
  //       "address_obj": {
  //         "street1": "Hung Vuong",
  //         "street2": "Dien Khanh",
  //         "city": "Nha Trang",
  //         "state": null,
  //         "country": "Vietnam",
  //         "postalcode": "650000"
  //       },
  //       "address": "Hung Vuong Dien Khanh, Nha Trang 650000 Vietnam",
  //       "hours": {
  //         "week_ranges": [
  //           [
  //             {
  //               "open_time": 360,
  //               "close_time": 1320
  //             }
  //           ],
  //           [
  //             {
  //               "open_time": 360,
  //               "close_time": 1320
  //             }
  //           ],
  //           [
  //             {
  //               "open_time": 360,
  //               "close_time": 1320
  //             }
  //           ],
  //           [
  //             {
  //               "open_time": 360,
  //               "close_time": 1320
  //             }
  //           ],
  //           [
  //             {
  //               "open_time": 360,
  //               "close_time": 1320
  //             }
  //           ],
  //           [
  //             {
  //               "open_time": 360,
  //               "close_time": 1320
  //             }
  //           ],
  //           [
  //             {
  //               "open_time": 360,
  //               "close_time": 1320
  //             }
  //           ]
  //         ],
  //         "timezone": "Asia/Ho_Chi_Minh"
  //       },
  //       "is_candidate_for_contact_info_suppression": false,
  //       "cuisine": [
  //         {
  //           "key": "10642",
  //           "name": "Cafe"
  //         }
  //       ],
  //       "dietary_restrictions": [],
  //       "establishment_types": [
  //         {
  //           "key": "10591",
  //           "name": "Restaurants"
  //         }
  //       ]
  //     },
  //     {
  //       "location_id": "7385578",
  //       "name": "Xoi Bap Viet Nam",
  //       "latitude": "11.92117",
  //       "longitude": "109.14324",
  //       "num_reviews": "1",
  //       "timezone": "Asia/Ho_Chi_Minh",
  //       "location_string": "Cam Ranh, Khanh Hoa Province",
  //       "awards": [],
  //       "doubleclick_zone": "as.vietnam",
  //       "preferred_map_engine": "default",
  //       "raw_ranking": "3.019207000732422",
  //       "ranking_geo": "Cam Ranh",
  //       "ranking_geo_id": "1025208",
  //       "ranking_position": "11",
  //       "ranking_denominator": "15",
  //       "ranking_category": "restaurant",
  //       "ranking": "#11 of 21 Restaurants in Cam Ranh",
  //       "distance": null,
  //       "distance_string": null,
  //       "bearing": "south",
  //       "rating": "5.0",
  //       "is_closed": false,
  //       "is_long_closed": false,
  //       "price_level": "",
  //       "description": "",
  //       "web_url": "https://www.tripadvisor.com/Restaurant_Review-g1025208-d7385578-Reviews-Xoi_Bap_Viet_Nam-Cam_Ranh_Khanh_Hoa_Province.html",
  //       "write_review": "https://www.tripadvisor.com/UserReview-g1025208-d7385578-Xoi_Bap_Viet_Nam-Cam_Ranh_Khanh_Hoa_Province.html",
  //       "ancestors": [
  //         {
  //           "subcategory": [
  //             {
  //               "key": "city",
  //               "name": "City"
  //             }
  //           ],
  //           "name": "Cam Ranh",
  //           "abbrv": null,
  //           "location_id": "1025208"
  //         },
  //         {
  //           "subcategory": [
  //             {
  //               "key": "province",
  //               "name": "Province"
  //             }
  //           ],
  //           "name": "Khanh Hoa Province",
  //           "abbrv": null,
  //           "location_id": "1184689"
  //         },
  //         {
  //           "subcategory": [
  //             {
  //               "key": "country",
  //               "name": "Country"
  //             }
  //           ],
  //           "name": "Vietnam",
  //           "abbrv": null,
  //           "location_id": "293921"
  //         }
  //       ],
  //       "category": {
  //         "key": "restaurant",
  //         "name": "Restaurant"
  //       },
  //       "subcategory": [
  //         {
  //           "key": "fast_food",
  //           "name": "Fast food"
  //         }
  //       ],
  //       "parent_display_name": "Cam Ranh",
  //       "is_jfy_enabled": false,
  //       "nearest_metro_station": [],
  //       "phone": "+84 94 329 12 88",
  //       "address_obj": {
  //         "street1": "51/5B Phan Chu Trinh",
  //         "street2": "Gan Nga Tu Phan Chu Trinh, Huynh Thuc Khanh",
  //         "city": "Cam Ranh",
  //         "state": null,
  //         "country": "Vietnam",
  //         "postalcode": "058"
  //       },
  //       "address": "51/5B Phan Chu Trinh Gan Nga Tu Phan Chu Trinh, Huynh Thuc Khanh, Cam Ranh 058 Vietnam",
  //       "is_candidate_for_contact_info_suppression": false,
  //       "cuisine": [],
  //       "dietary_restrictions": [],
  //       "establishment_types": [
  //         {
  //           "key": "10591",
  //           "name": "Restaurants"
  //         }
  //       ]
  //     },
  //     {
  //       "location_id": "13809901",
  //       "name": "Quan Lau Bo Anh Dung",
  //       "latitude": "12.278305",
  //       "longitude": "109.13267",
  //       "num_reviews": "0",
  //       "timezone": "Asia/Ho_Chi_Minh",
  //       "location_string": "Nha Trang, Khanh Hoa Province",
  //       "awards": [],
  //       "doubleclick_zone": "as.vietnam.khanh_hoa.nha_trang",
  //       "preferred_map_engine": "default",
  //       "distance": "7.289200667817142",
  //       "distance_string": "7.3 km",
  //       "bearing": "south",
  //       "is_closed": false,
  //       "is_long_closed": false,
  //       "price_level": "",
  //       "description": "",
  //       "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293928-d13809901-Reviews-Quan_Lau_Bo_Anh_Dung-Nha_Trang_Khanh_Hoa_Province.html",
  //       "write_review": "https://www.tripadvisor.com/UserReview-g293928-d13809901-Quan_Lau_Bo_Anh_Dung-Nha_Trang_Khanh_Hoa_Province.html",
  //       "ancestors": [
  //         {
  //           "subcategory": [
  //             {
  //               "key": "city",
  //               "name": "City"
  //             }
  //           ],
  //           "name": "Nha Trang",
  //           "abbrv": null,
  //           "location_id": "293928"
  //         },
  //         {
  //           "subcategory": [
  //             {
  //               "key": "province",
  //               "name": "Province"
  //             }
  //           ],
  //           "name": "Khanh Hoa Province",
  //           "abbrv": null,
  //           "location_id": "1184689"
  //         },
  //         {
  //           "subcategory": [
  //             {
  //               "key": "country",
  //               "name": "Country"
  //             }
  //           ],
  //           "name": "Vietnam",
  //           "abbrv": null,
  //           "location_id": "293921"
  //         }
  //       ],
  //       "category": {
  //         "key": "restaurant",
  //         "name": "Restaurant"
  //       },
  //       "subcategory": [],
  //       "parent_display_name": "Nha Trang",
  //       "is_jfy_enabled": false,
  //       "nearest_metro_station": [],
  //       "phone": "+84 258 3512 387",
  //       "address_obj": {
  //         "street1": "64 Nguyen Thi Minh Khai",
  //         "street2": null,
  //         "city": "Nha Trang",
  //         "state": null,
  //         "country": "Vietnam",
  //         "postalcode": "650000"
  //       },
  //       "address": "64 Nguyen Thi Minh Khai, Nha Trang 650000 Vietnam",
  //       "is_candidate_for_contact_info_suppression": false,
  //       "cuisine": [
  //         {
  //           "key": "10675",
  //           "name": "Vietnamese"
  //         }
  //       ],
  //       "dietary_restrictions": [],
  //       "establishment_types": [
  //         {
  //           "key": "10591",
  //           "name": "Restaurants"
  //         }
  //       ]
  //     },
  //     {
  //       "location_id": "293928",
  //       "ad_position": "inline1",
  //       "ad_size": "8X8",
  //       "doubleclick_zone": "as.vietnam.khanh_hoa.nha_trang",
  //       "ancestors": [
  //         {
  //           "subcategory": [
  //             {
  //               "key": "province",
  //               "name": "Province"
  //             }
  //           ],
  //           "name": "Khanh Hoa Province",
  //           "abbrv": null,
  //           "location_id": "1184689"
  //         },
  //         {
  //           "subcategory": [
  //             {
  //               "key": "country",
  //               "name": "Country"
  //             }
  //           ],
  //           "name": "Vietnam",
  //           "abbrv": null,
  //           "location_id": "293921"
  //         }
  //       ],
  //       "detail": "0",
  //       "page_type": "restaurants",
  //       "mob_ptype": "app_restaurants"
  //     },
  //     {
  //       "location_id": "10797819",
  //       "name": "Bien Rung Restaurant",
  //       "latitude": "12.255538",
  //       "longitude": "109.10267",
  //       "num_reviews": "0",
  //       "timezone": "Asia/Ho_Chi_Minh",
  //       "location_string": "Nha Trang, Khanh Hoa Province",
  //       "awards": [],
  //       "doubleclick_zone": "as.vietnam.khanh_hoa.nha_trang",
  //       "preferred_map_engine": "default",
  //       "distance": "9.97938557457899",
  //       "distance_string": "10 km",
  //       "bearing": "south",
  //       "is_closed": false,
  //       "is_long_closed": false,
  //       "price_level": "",
  //       "description": "",
  //       "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293928-d10797819-Reviews-Bien_Rung_Restaurant-Nha_Trang_Khanh_Hoa_Province.html",
  //       "write_review": "https://www.tripadvisor.com/UserReview-g293928-d10797819-Bien_Rung_Restaurant-Nha_Trang_Khanh_Hoa_Province.html",
  //       "ancestors": [
  //         {
  //           "subcategory": [
  //             {
  //               "key": "city",
  //               "name": "City"
  //             }
  //           ],
  //           "name": "Nha Trang",
  //           "abbrv": null,
  //           "location_id": "293928"
  //         },
  //         {
  //           "subcategory": [
  //             {
  //               "key": "province",
  //               "name": "Province"
  //             }
  //           ],
  //           "name": "Khanh Hoa Province",
  //           "abbrv": null,
  //           "location_id": "1184689"
  //         },
  //         {
  //           "subcategory": [
  //             {
  //               "key": "country",
  //               "name": "Country"
  //             }
  //           ],
  //           "name": "Vietnam",
  //           "abbrv": null,
  //           "location_id": "293921"
  //         }
  //       ],
  //       "category": {
  //         "key": "restaurant",
  //         "name": "Restaurant"
  //       },
  //       "subcategory": [],
  //       "parent_display_name": "Nha Trang",
  //       "is_jfy_enabled": false,
  //       "nearest_metro_station": [],
  //       "phone": "+84 58 6282 828",
  //       "address_obj": {
  //         "street1": "15 Chu Van An Street, Dien Khanh Town,",
  //         "street2": null,
  //         "city": "Nha Trang",
  //         "state": null,
  //         "country": "Vietnam",
  //         "postalcode": null
  //       },
  //       "address": "15 Chu Van An Street, Dien Khanh Town,, Nha Trang Vietnam",
  //       "is_candidate_for_contact_info_suppression": false,
  //       "cuisine": [
  //         {
  //           "key": "10675",
  //           "name": "Vietnamese"
  //         }
  //       ],
  //       "dietary_restrictions": [],
  //       "establishment_types": [
  //         {
  //           "key": "10591",
  //           "name": "Restaurants"
  //         }
  //       ]
  //     },
  //     {
  //       "location_id": "19625554",
  //       "name": "Nha Hang - Quan An Gio",
  //       "latitude": "11.91457",
  //       "longitude": "109.13224",
  //       "num_reviews": "0",
  //       "timezone": "Asia/Ho_Chi_Minh",
  //       "location_string": "Cam Ranh, Khanh Hoa Province",
  //       "awards": [],
  //       "doubleclick_zone": "as.vietnam",
  //       "preferred_map_engine": "default",
  //       "distance": null,
  //       "distance_string": null,
  //       "bearing": "south",
  //       "is_closed": false,
  //       "is_long_closed": false,
  //       "price_level": "",
  //       "description": "",
  //       "web_url": "https://www.tripadvisor.com/Restaurant_Review-g1025208-d19625554-Reviews-Nha_Hang_Quan_An_Gio-Cam_Ranh_Khanh_Hoa_Province.html",
  //       "write_review": "https://www.tripadvisor.com/UserReview-g1025208-d19625554-Nha_Hang_Quan_An_Gio-Cam_Ranh_Khanh_Hoa_Province.html",
  //       "ancestors": [
  //         {
  //           "subcategory": [
  //             {
  //               "key": "city",
  //               "name": "City"
  //             }
  //           ],
  //           "name": "Cam Ranh",
  //           "abbrv": null,
  //           "location_id": "1025208"
  //         },
  //         {
  //           "subcategory": [
  //             {
  //               "key": "province",
  //               "name": "Province"
  //             }
  //           ],
  //           "name": "Khanh Hoa Province",
  //           "abbrv": null,
  //           "location_id": "1184689"
  //         },
  //         {
  //           "subcategory": [
  //             {
  //               "key": "country",
  //               "name": "Country"
  //             }
  //           ],
  //           "name": "Vietnam",
  //           "abbrv": null,
  //           "location_id": "293921"
  //         }
  //       ],
  //       "category": {
  //         "key": "restaurant",
  //         "name": "Restaurant"
  //       },
  //       "subcategory": [],
  //       "parent_display_name": "Cam Ranh",
  //       "is_jfy_enabled": false,
  //       "nearest_metro_station": [],
  //       "phone": "+84 93 571 70 70",
  //       "address_obj": {
  //         "street1": "Cam Nghia",
  //         "street2": null,
  //         "city": "Cam Ranh",
  //         "state": null,
  //         "country": "Vietnam",
  //         "postalcode": "650000"
  //       },
  //       "address": "Cam Nghia, Cam Ranh 650000 Vietnam",
  //       "is_candidate_for_contact_info_suppression": false,
  //       "cuisine": [
  //         {
  //           "key": "10675",
  //           "name": "Vietnamese"
  //         }
  //       ],
  //       "dietary_restrictions": [],
  //       "establishment_types": [
  //         {
  //           "key": "10591",
  //           "name": "Restaurants"
  //         }
  //       ]
  //     }
  //   ],
  //   "filters": {
  //     "rac_deals_only": {
  //       "false": {
  //         "count": "6",
  //         "label": "All",
  //         "selected": true
  //       },
  //       "true": {
  //         "count": "0",
  //         "label": "Special Offers",
  //         "selected": false
  //       }
  //     },
  //     "rating": {
  //       "1": {
  //         "count": "0",
  //         "label": "Terrible",
  //         "selected": false
  //       },
  //       "2": {
  //         "count": "0",
  //         "label": "Poor",
  //         "selected": false
  //       },
  //       "3": {
  //         "count": "0",
  //         "label": "Average",
  //         "selected": false
  //       },
  //       "4": {
  //         "count": "0",
  //         "label": "Very Good",
  //         "selected": false
  //       },
  //       "5": {
  //         "count": "3",
  //         "label": "Excellent",
  //         "selected": false
  //       },
  //       "all": {
  //         "count": "6",
  //         "label": "All",
  //         "selected": true
  //       }
  //     },
  //     "restaurant_mealtype": {
  //       "10597": {
  //         "count": "1",
  //         "label": "Breakfast",
  //         "locale_independent_label": "Breakfast",
  //         "priority": "1",
  //         "selected": false
  //       },
  //       "10598": {
  //         "count": "1",
  //         "label": "Lunch",
  //         "locale_independent_label": "Lunch",
  //         "priority": "3",
  //         "selected": false
  //       },
  //       "10599": {
  //         "count": "1",
  //         "label": "Dinner",
  //         "locale_independent_label": "Dinner",
  //         "priority": "4",
  //         "selected": false
  //       },
  //       "all": {
  //         "count": "6",
  //         "label": "All",
  //         "locale_independent_label": "All",
  //         "priority": "0",
  //         "selected": true
  //       }
  //     },
  //     "exclude_locations": {
  //       "filtered": {
  //         "count": "6",
  //         "label": "Results filtered"
  //       },
  //       "all": {
  //         "count": "6",
  //         "label": "All"
  //       }
  //     },
  //     "dietary_restrictions": {
  //       "all": {
  //         "count": "6",
  //         "label": "None",
  //         "locale_independent_label": "All",
  //         "priority": "0",
  //         "selected": true
  //       }
  //     },
  //     "rsrv": {
  //       "false": {
  //         "count": "6",
  //         "label": "All",
  //         "selected": true
  //       },
  //       "true": {
  //         "count": "0",
  //         "label": "Online Reservations",
  //         "selected": false
  //       }
  //     },
  //     "restaurant_tagcategory": {
  //       "9900": {
  //         "count": "2",
  //         "label": "Coffee & Tea",
  //         "locale_independent_label": "Coffee & Tea",
  //         "priority": "4",
  //         "selected": false
  //       },
  //       "10591": {
  //         "count": "6",
  //         "label": "Restaurants",
  //         "locale_independent_label": "Restaurants",
  //         "priority": "1",
  //         "selected": true
  //       },
  //       "all": {
  //         "count": "6",
  //         "label": "All",
  //         "locale_independent_label": "All",
  //         "priority": "0",
  //         "selected": false
  //       }
  //     },
  //     "open_now": {
  //       "false": {
  //         "count": "6",
  //         "label": "All",
  //         "selected": true
  //       },
  //       "true": {
  //         "count": "2",
  //         "label": "Open Now",
  //         "selected": false
  //       }
  //     },
  //     "min_rating": {
  //       "3": {
  //         "count": "3",
  //         "label": "3",
  //         "selected": false
  //       },
  //       "4": {
  //         "count": "3",
  //         "label": "4",
  //         "selected": false
  //       },
  //       "5": {
  //         "count": "3",
  //         "label": "5",
  //         "selected": false
  //       }
  //     },
  //     "subcategory": {
  //       "all": {
  //         "count": "6",
  //         "label": "All",
  //         "selected": true
  //       },
  //       "sit_down": {
  //         "count": "1",
  //         "label": "Sit down",
  //         "selected": false
  //       },
  //       "cafe": {
  //         "count": "1",
  //         "label": "Café",
  //         "selected": false
  //       },
  //       "fast_food": {
  //         "count": "1",
  //         "label": "Fast food",
  //         "selected": false
  //       }
  //     },
  //     "prices_restaurants": {
  //       "10953": {
  //         "count": "1",
  //         "label": "$",
  //         "locale_independent_label": "Cheap Eats",
  //         "priority": "1",
  //         "selected": false
  //       },
  //       "10955": {
  //         "count": "1",
  //         "label": "$$ - $$$",
  //         "locale_independent_label": "Mid-range",
  //         "priority": "2",
  //         "selected": false
  //       },
  //       "all": {
  //         "count": "6",
  //         "label": "all",
  //         "locale_independent_label": "All",
  //         "priority": "0",
  //         "selected": true
  //       }
  //     },
  //     "restaurant_dining_options": {
  //       "10601": {
  //         "count": "1",
  //         "label": "Takeout",
  //         "locale_independent_label": "Takeout",
  //         "priority": "7",
  //         "selected": false
  //       },
  //       "10602": {
  //         "count": "1",
  //         "label": "Reservations",
  //         "locale_independent_label": "Reservations",
  //         "priority": "5",
  //         "selected": false
  //       },
  //       "10603": {
  //         "count": "1",
  //         "label": "Outdoor Seating",
  //         "locale_independent_label": "Outdoor Seating",
  //         "priority": "3",
  //         "selected": false
  //       },
  //       "10854": {
  //         "count": "1",
  //         "label": "Parking Available",
  //         "locale_independent_label": "Parking Available",
  //         "priority": "11",
  //         "selected": false
  //       },
  //       "10870": {
  //         "count": "1",
  //         "label": "Free Wifi",
  //         "locale_independent_label": "Free Wifi",
  //         "priority": "10",
  //         "selected": false
  //       },
  //       "all": {
  //         "count": "6",
  //         "label": "All",
  //         "locale_independent_label": "All",
  //         "priority": "0",
  //         "selected": true
  //       }
  //     },
  //     "restaurant_tagcategory_standalone": {
  //       "9900": {
  //         "count": "2",
  //         "label": "Coffee & Tea",
  //         "locale_independent_label": "Coffee & Tea",
  //         "priority": "5",
  //         "selected": false
  //       },
  //       "10591": {
  //         "count": "6",
  //         "label": "Restaurants",
  //         "locale_independent_label": "Restaurants",
  //         "priority": "1",
  //         "selected": true
  //       },
  //       "all": {
  //         "count": "8",
  //         "label": "All",
  //         "locale_independent_label": "All",
  //         "priority": "0",
  //         "selected": false
  //       }
  //     },
  //     "restaurant_styles": {
  //       "all": {
  //         "count": "6",
  //         "label": "All",
  //         "locale_independent_label": "All",
  //         "priority": "0",
  //         "selected": true
  //       }
  //     },
  //     "combined_food": {
  //       "10642": {
  //         "count": "1",
  //         "label": "Cafe",
  //         "locale_independent_label": "Cafe",
  //         "priority": "109",
  //         "selected": false
  //       },
  //       "10675": {
  //         "count": "4",
  //         "label": "Vietnamese",
  //         "locale_independent_label": "Vietnamese",
  //         "priority": "809",
  //         "selected": false
  //       },
  //       "all": {
  //         "count": "6",
  //         "label": "All Cuisines",
  //         "locale_independent_label": "All",
  //         "priority": "0",
  //         "selected": true
  //       }
  //     }
  //   },
  //   "filters_v2": {
  //     "search_filters": [
  //       {
  //         "key": "restaurant_tagcategory_standalone",
  //         "value": "10591"
  //       },
  //       {
  //         "key": "restaurant_mealtype",
  //         "value": "all"
  //       }
  //     ],
  //     "filter_sections": [
  //       {
  //         "label": "Most Popular",
  //         "section_id": "most_popular",
  //         "filter_groups": [
  //           {
  //             "type": "multi_select",
  //             "key": "prices_restaurants",
  //             "tracking_key": "price",
  //             "label": "Price",
  //             "options": [
  //               {
  //                 "label": "$",
  //                 "value": "10953",
  //                 "selected": false,
  //                 "count": "1",
  //                 "default": false,
  //                 "single_select": false
  //               },
  //               {
  //                 "label": "$$ - $$$",
  //                 "value": "10955",
  //                 "selected": false,
  //                 "count": "1",
  //                 "default": false,
  //                 "single_select": false
  //               }
  //             ]
  //           },
  //           {
  //             "type": "single_select",
  //             "key": "open_now",
  //             "tracking_key": "open_now",
  //             "label": "Open Now",
  //             "options": [
  //               {
  //                 "label": "Open Now",
  //                 "value": "true",
  //                 "selected": false,
  //                 "count": "2",
  //                 "default": false
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         "label": "Cuisine Type",
  //         "section_id": "combined_food",
  //         "filter_groups": [
  //           {
  //             "type": "multi_select",
  //             "key": "combined_food",
  //             "tracking_key": "Cuisine",
  //             "label": "Cuisine Type",
  //             "options": [
  //               {
  //                 "label": "All Cuisines",
  //                 "value": "all",
  //                 "selected": true,
  //                 "count": "6",
  //                 "default": true,
  //                 "single_select": true
  //               },
  //               {
  //                 "label": "Cafe",
  //                 "value": "10642",
  //                 "selected": false,
  //                 "count": "1",
  //                 "default": false,
  //                 "single_select": false
  //               },
  //               {
  //                 "label": "Vietnamese",
  //                 "value": "10675",
  //                 "selected": false,
  //                 "count": "4",
  //                 "default": false,
  //                 "single_select": false
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         "label": "Meals",
  //         "section_id": "restaurant_mealtype",
  //         "filter_groups": [
  //           {
  //             "type": "multi_select",
  //             "key": "restaurant_mealtype",
  //             "tracking_key": "Meals",
  //             "label": "Meals",
  //             "options": [
  //               {
  //                 "label": "Breakfast",
  //                 "value": "10597",
  //                 "selected": false,
  //                 "count": "1",
  //                 "default": false,
  //                 "single_select": false
  //               },
  //               {
  //                 "label": "Lunch",
  //                 "value": "10598",
  //                 "selected": false,
  //                 "count": "1",
  //                 "default": false,
  //                 "single_select": false
  //               },
  //               {
  //                 "label": "Dinner",
  //                 "value": "10599",
  //                 "selected": false,
  //                 "count": "1",
  //                 "default": false,
  //                 "single_select": false
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         "label": "Establishment Type",
  //         "section_id": "restaurant_tagcategory",
  //         "filter_groups": [
  //           {
  //             "type": "multi_select",
  //             "key": "restaurant_tagcategory",
  //             "tracking_key": "mobile_establishment_type_filter",
  //             "label": "Establishment Type",
  //             "options": [
  //               {
  //                 "label": "Restaurants",
  //                 "value": "10591",
  //                 "selected": true,
  //                 "count": "6",
  //                 "default": true,
  //                 "single_select": false
  //               },
  //               {
  //                 "label": "Coffee & Tea",
  //                 "value": "9900",
  //                 "selected": false,
  //                 "count": "2",
  //                 "default": false,
  //                 "single_select": false
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         "label": "Minimum Traveler Rating",
  //         "section_id": "min_rating",
  //         "filter_groups": [
  //           {
  //             "type": "single_select",
  //             "key": "min_rating",
  //             "tracking_key": "travelerrating",
  //             "label": "Minimum Traveler Rating",
  //             "options": [
  //               {
  //                 "label": "3",
  //                 "value": "3",
  //                 "selected": false,
  //                 "count": "3",
  //                 "default": false
  //               },
  //               {
  //                 "label": "4",
  //                 "value": "4",
  //                 "selected": false,
  //                 "count": "3",
  //                 "default": false
  //               },
  //               {
  //                 "label": "5",
  //                 "value": "5",
  //                 "selected": false,
  //                 "count": "3",
  //                 "default": false
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         "label": "Restaurant Features",
  //         "section_id": "restaurant_features",
  //         "filter_groups": [
  //           {
  //             "type": "multi_select",
  //             "key": "restaurant_dining_options",
  //             "tracking_key": "DiningOptions",
  //             "label": "Restaurant Features",
  //             "options": [
  //               {
  //                 "label": "Reservations",
  //                 "value": "10602",
  //                 "selected": false,
  //                 "count": "1",
  //                 "default": false,
  //                 "single_select": false
  //               }
  //             ]
  //           },
  //           {
  //             "type": "multi_select",
  //             "key": "restaurant_dining_options",
  //             "tracking_key": "DiningOptions",
  //             "label": "Restaurant Features",
  //             "options": [
  //               {
  //                 "label": "Takeout",
  //                 "value": "10601",
  //                 "selected": false,
  //                 "count": "1",
  //                 "default": false,
  //                 "single_select": false
  //               }
  //             ]
  //           },
  //           {
  //             "type": "multi_select",
  //             "key": "restaurant_dining_options",
  //             "tracking_key": "DiningOptions",
  //             "label": "Restaurant Features",
  //             "options": [
  //               {
  //                 "label": "Free Wifi",
  //                 "value": "10870",
  //                 "selected": false,
  //                 "count": "1",
  //                 "default": false,
  //                 "single_select": false
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ],
  //     "metadata": {
  //       "sort": "Ranking"
  //     }
  //   },
  //   "restaurant_availability_options": {
  //     "day": "16",
  //     "month": "2",
  //     "year": "2022",
  //     "hour": "22",
  //     "minute": "0",
  //     "people": "2",
  //     "datestring": "02/16/2022",
  //     "is_default": true,
  //     "is_set": false,
  //     "racable": false,
  //     "time_options": {
  //       "selected_option": {
  //         "value": "22:00:00",
  //         "display": "10:00 PM",
  //         "selected": true
  //       },
  //       "options": [
  //         {
  //           "value": "00:00:00",
  //           "display": "12:00 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "00:30:00",
  //           "display": "12:30 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "01:00:00",
  //           "display": "1:00 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "01:30:00",
  //           "display": "1:30 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "02:00:00",
  //           "display": "2:00 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "02:30:00",
  //           "display": "2:30 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "03:00:00",
  //           "display": "3:00 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "03:30:00",
  //           "display": "3:30 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "04:00:00",
  //           "display": "4:00 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "04:30:00",
  //           "display": "4:30 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "05:00:00",
  //           "display": "5:00 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "05:30:00",
  //           "display": "5:30 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "06:00:00",
  //           "display": "6:00 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "06:30:00",
  //           "display": "6:30 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "07:00:00",
  //           "display": "7:00 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "07:30:00",
  //           "display": "7:30 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "08:00:00",
  //           "display": "8:00 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "08:30:00",
  //           "display": "8:30 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "09:00:00",
  //           "display": "9:00 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "09:30:00",
  //           "display": "9:30 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "10:00:00",
  //           "display": "10:00 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "10:30:00",
  //           "display": "10:30 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "11:00:00",
  //           "display": "11:00 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "11:30:00",
  //           "display": "11:30 AM",
  //           "selected": null
  //         },
  //         {
  //           "value": "12:00:00",
  //           "display": "12:00 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "12:30:00",
  //           "display": "12:30 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "13:00:00",
  //           "display": "1:00 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "13:30:00",
  //           "display": "1:30 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "14:00:00",
  //           "display": "2:00 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "14:30:00",
  //           "display": "2:30 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "15:00:00",
  //           "display": "3:00 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "15:30:00",
  //           "display": "3:30 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "16:00:00",
  //           "display": "4:00 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "16:30:00",
  //           "display": "4:30 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "17:00:00",
  //           "display": "5:00 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "17:30:00",
  //           "display": "5:30 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "18:00:00",
  //           "display": "6:00 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "18:30:00",
  //           "display": "6:30 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "19:00:00",
  //           "display": "7:00 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "19:30:00",
  //           "display": "7:30 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "20:00:00",
  //           "display": "8:00 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "20:30:00",
  //           "display": "8:30 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "21:00:00",
  //           "display": "9:00 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "21:30:00",
  //           "display": "9:30 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "22:00:00",
  //           "display": "10:00 PM",
  //           "selected": true
  //         },
  //         {
  //           "value": "22:30:00",
  //           "display": "10:30 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "23:00:00",
  //           "display": "11:00 PM",
  //           "selected": null
  //         },
  //         {
  //           "value": "23:30:00",
  //           "display": "11:30 PM",
  //           "selected": null
  //         }
  //       ]
  //     },
  //     "people_options": {
  //       "selected_option": {
  //         "value": "2",
  //         "display": "2",
  //         "selected": true
  //       },
  //       "options": [
  //         {
  //           "value": "1",
  //           "display": "1",
  //           "selected": null
  //         },
  //         {
  //           "value": "2",
  //           "display": "2",
  //           "selected": true
  //         },
  //         {
  //           "value": "3",
  //           "display": "3",
  //           "selected": null
  //         },
  //         {
  //           "value": "4",
  //           "display": "4",
  //           "selected": null
  //         },
  //         {
  //           "value": "5",
  //           "display": "5",
  //           "selected": null
  //         },
  //         {
  //           "value": "6",
  //           "display": "6",
  //           "selected": null
  //         },
  //         {
  //           "value": "7",
  //           "display": "7",
  //           "selected": null
  //         },
  //         {
  //           "value": "8",
  //           "display": "8",
  //           "selected": null
  //         },
  //         {
  //           "value": "9",
  //           "display": "9",
  //           "selected": null
  //         },
  //         {
  //           "value": "10",
  //           "display": "10",
  //           "selected": null
  //         },
  //         {
  //           "value": "11",
  //           "display": "11",
  //           "selected": null
  //         },
  //         {
  //           "value": "12",
  //           "display": "12",
  //           "selected": null
  //         },
  //         {
  //           "value": "13",
  //           "display": "13",
  //           "selected": null
  //         },
  //         {
  //           "value": "14",
  //           "display": "14",
  //           "selected": null
  //         },
  //         {
  //           "value": "15",
  //           "display": "15",
  //           "selected": null
  //         },
  //         {
  //           "value": "16",
  //           "display": "16",
  //           "selected": null
  //         },
  //         {
  //           "value": "17",
  //           "display": "17",
  //           "selected": null
  //         },
  //         {
  //           "value": "18",
  //           "display": "18",
  //           "selected": null
  //         },
  //         {
  //           "value": "19",
  //           "display": "19",
  //           "selected": null
  //         },
  //         {
  //           "value": "20",
  //           "display": "20",
  //           "selected": null
  //         }
  //       ]
  //     }
  //   },
  //   "open_hours_options": {
  //     "closed_count": "0",
  //     "is_set": false,
  //     "low_coverage_primary_message": "Open hours aren't available for all places.",
  //     "timezone": "Asia/Ho_Chi_Minh",
  //     "unsure_count": "4",
  //     "open_count": "2",
  //     "low_coverage_secondary_message": "Show all restaurants",
  //     "current_value": "now"
  //   },
  //   "paging": {
  //     "results": "6",
  //     "total_results": "6"
  //   }
  // }
 
   

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Resturants, Hotels & Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="resuturants">Resturants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3</MenuItem>
          <MenuItem value={4}>Above 4</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default List;