export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      events: {
        Row: {
          category: string
          created_at: string
          date: string
          description: string
          end_date: string | null
          id: string
          image_url: string
          is_featured: boolean | null
          is_free: boolean
          is_trending: boolean | null
          location_address: string
          location_city: string
          location_country: string
          location_lat: number | null
          location_lng: number | null
          location_name: string
          long_description: string | null
          price_currency: string
          price_formatted: string
          price_value: number
          tags: string[]
          time: string
          title: string
        }
        Insert: {
          category: string
          created_at?: string
          date: string
          description: string
          end_date?: string | null
          id?: string
          image_url: string
          is_featured?: boolean | null
          is_free: boolean
          is_trending?: boolean | null
          location_address: string
          location_city: string
          location_country: string
          location_lat?: number | null
          location_lng?: number | null
          location_name: string
          long_description?: string | null
          price_currency: string
          price_formatted: string
          price_value: number
          tags: string[]
          time: string
          title: string
        }
        Update: {
          category?: string
          created_at?: string
          date?: string
          description?: string
          end_date?: string | null
          id?: string
          image_url?: string
          is_featured?: boolean | null
          is_free?: boolean
          is_trending?: boolean | null
          location_address?: string
          location_city?: string
          location_country?: string
          location_lat?: number | null
          location_lng?: number | null
          location_name?: string
          long_description?: string | null
          price_currency?: string
          price_formatted?: string
          price_value?: number
          tags?: string[]
          time?: string
          title?: string
        }
        Relationships: []
      }
      historical_places: {
        Row: {
          city: string
          coordinates: Json | null
          created_at: string
          description: string
          entry_fee: string | null
          highlights: string[] | null
          id: string
          image: string
          long_description: string | null
          name: string
          period: string | null
          place_type: string
          state: string
          unesco: boolean | null
          visiting_hours: string | null
        }
        Insert: {
          city: string
          coordinates?: Json | null
          created_at?: string
          description: string
          entry_fee?: string | null
          highlights?: string[] | null
          id?: string
          image: string
          long_description?: string | null
          name: string
          period?: string | null
          place_type: string
          state: string
          unesco?: boolean | null
          visiting_hours?: string | null
        }
        Update: {
          city?: string
          coordinates?: Json | null
          created_at?: string
          description?: string
          entry_fee?: string | null
          highlights?: string[] | null
          id?: string
          image?: string
          long_description?: string | null
          name?: string
          period?: string | null
          place_type?: string
          state?: string
          unesco?: boolean | null
          visiting_hours?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
