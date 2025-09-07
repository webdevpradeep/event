import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function EventCard({ event, onFavorite, onBook, isFavorite }) {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === tomorrow.toDateString()) return 'Tomorrow';
    return date.toLocaleDateString('en-IN', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: event.image }} style={styles.eventImage} />

        {event.trending && (
          <LinearGradient
            colors={['#f59e0b', '#ef4444']}
            style={styles.trendingBadge}
          >
            <Ionicons name="trending-up" size={12} color="white" />
            <Text style={styles.badgeText}>TRENDING</Text>
          </LinearGradient>
        )}

        {event.featured && (
          <LinearGradient
            colors={['#8b5cf6', '#ec4899']}
            style={[styles.trendingBadge, { top: event.trending ? 35 : 10 }]}
          >
            <Ionicons name="star" size={12} color="white" />
            <Text style={styles.badgeText}>FEATURED</Text>
          </LinearGradient>
        )}

        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => onFavorite(event.id)}
        >
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={20}
            color={isFavorite ? '#ef4444' : 'white'}
          />
        </TouchableOpacity>

        <View style={styles.priceContainer}>
          {event.originalPrice ? (
            <LinearGradient
              colors={['#059669', '#10b981']}
              style={styles.priceGradient}
            >
              <Text style={styles.originalPrice}>{event.originalPrice}</Text>
              <Text style={styles.price}>{event.price}</Text>
            </LinearGradient>
          ) : (
            <View style={styles.priceNormal}>
              <Text style={styles.price}>{event.price}</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.eventTitle} numberOfLines={2}>
            {event.title}
          </Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#f59e0b" />
            <Text style={styles.rating}>{event.rating}</Text>
          </View>
        </View>

        <View style={styles.eventDetails}>
          <View style={styles.detailRow}>
            <Ionicons name="calendar" size={16} color="#6366f1" />
            <Text style={styles.detailText}>{formatDate(event.date)}</Text>
            <Ionicons
              name="time"
              size={16}
              color="#059669"
              style={{ marginLeft: 15 }}
            />
            <Text style={styles.detailText}>{event.time}</Text>
          </View>

          <View style={styles.detailRow}>
            <Ionicons name="location" size={16} color="#ef4444" />
            <Text style={styles.detailText} numberOfLines={1}>
              {event.location}
            </Text>
            <Text style={styles.distance}>{event.distance}</Text>
          </View>

          <View style={styles.detailRow}>
            <Ionicons name="people" size={16} color="#8b5cf6" />
            <Text style={styles.detailText}>{event.attendees} going</Text>
          </View>
        </View>

        <Text style={styles.description} numberOfLines={2}>
          {event.description}
        </Text>

        <View style={styles.tagsContainer}>
          {event.tags.slice(0, 3).map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>#{tag}</Text>
            </View>
          ))}
        </View>

        <View style={styles.cardFooter}>
          <Text style={styles.organizer}>by {event.organizer}</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={styles.bookButton}
              onPress={() => onBook(event)}
            >
              <LinearGradient
                colors={['#6366f1', '#8b5cf6']}
                style={styles.bookGradient}
              >
                <Ionicons name="ticket" size={16} color="white" />
                <Text style={styles.bookText}>Book Now</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="share-outline" size={18} color="#6b7280" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="navigate" size={18} color="#6b7280" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    height: 200,
  },
  eventImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  trendingBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    padding: 8,
  },
  priceContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  priceGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  priceNormal: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  originalPrice: {
    color: 'white',
    fontSize: 12,
    textDecorationLine: 'line-through',
    opacity: 0.8,
  },
  price: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  cardContent: {
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    flex: 1,
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fef3c7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
    color: '#92400e',
  },
  eventDetails: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  detailText: {
    fontSize: 14,
    color: '#4b5563',
    marginLeft: 8,
    fontWeight: '500',
    flex: 1,
  },
  distance: {
    fontSize: 14,
    color: '#6366f1',
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tag: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  tagText: {
    fontSize: 12,
    color: '#4b5563',
    fontWeight: '500',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
    paddingTop: 12,
  },
  organizer: {
    fontSize: 12,
    color: '#9ca3af',
    flex: 1,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookButton: {
    marginRight: 8,
  },
  bookGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  bookText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },
  iconButton: {
    padding: 8,
    marginLeft: 4,
  },
});
