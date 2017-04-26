class MembersController < ApplicationController
  layout 'user_dashboard'
  before_action :authenticate_user!
  before_action  :set_up_group, only: [:create, :index, :new, :show_member, :edit, :update]
  before_action :set_member, only: [:show, :edit, :update, :destroy, :show_member]


  def index
    @members = Member.all
  end


  def show
  end


  def new
    @member = Member.new
    render :layout => 'wizard'
  end


  def edit
    render  :layout => 'wizard'
  end

  def show_member
  end


  def create
    @member = Member.new(member_params)
    @member.group_id = @group.id


      if @member.save
        redirect_to group_path(id:@member.slug)
      else
        format.html { render :new }
        format.json { render json: @member.errors, status: :unprocessable_entity }
      end
  end



  def update
    respond_to do |format|
      if @member.update(member_params)
        format.html { redirect_to group_member_show_member_path(group_id:@group.slug, member_id:@member.id) }

      else
        format.html { render :edit }
        format.json { render json: @member.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /members/1
  # DELETE /members/1.json
  def destroy
    @member.destroy
    respond_to do |format|
      format.html { redirect_to group_members_path, notice: 'Member was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private



    def set_up_group
        @group = Group.friendly.find(params[:group_id] || params[:id])
    end
    # Use callbacks to share common setup or constraints between actions.

    def set_member
      @member = Member.find(params[:member_id] || params[:id])
    end


    # Never trust parameters from the scary internet, only allow the white list through.
    def member_params
      params.require(:member).permit(:name, :telephone, :age, :email, :address, :image, :pic, :gender, :city, :country, :info, :username)
    end
end
